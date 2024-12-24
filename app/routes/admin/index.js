import fs from 'fs'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

// This is the askForOpenAIAPI page
export function index (req, res) {
  // If we have been posted some data then we need to do something here
  if (req.method === 'POST') {
    const dataPath = path.join(process.cwd(), 'data', 'data.json')
    const data = fs.readFileSync(dataPath, 'utf8')
    const dataObj = JSON.parse(data)

    // If we've been passed an apiKey then we need to add it to the data.json file
    if (req.body.apiKey) {
      // Load in the data.json file
      // If the openai object doesn't exist then we need to create it
      if (!dataObj.openai) dataObj.openai = {}
      // Add the API key and chat model to the data.json file
      dataObj.openai.API_KEY = req.body.apiKey
      dataObj.openai.CHAT_MODEL = req.body.chatModel
    }

    // If we've been passed a latitude and longitude then we need to add it to the data.json file
    if (req.body.latitude && req.body.longitude) {
      // Add the latitude and longitude to the data.json file
      dataObj.latlong = { latitude: req.body.latitude, longitude: req.body.longitude }
    }

    // If we've been passed a custom prompt then we need to add it to the data.json file
    if (req.body.prompt_head) {
      // Add the custom prompt to the data.json file
      const customPrompt = {
        prompt_head: req.body.prompt_head,
        prompt_shaping: req.body.prompt_shaping,
        prompt_tail: req.body.prompt_tail
      }
      // Write the custom prompt to the custom_prompt.json file
      const customPromptFile = path.join(__dirname, '../../../data/custom_prompt.json')
      fs.writeFileSync(customPromptFile, JSON.stringify(customPrompt, null, 2))
    }

    // Write the data.json file
    fs.writeFileSync(dataPath, JSON.stringify(dataObj, null, 2))
    // Put it all into the global data object
    global.data = dataObj

    return res.redirect('/admin')
  }

  // If we have openai in the global.data then pass them into the template,
  // otherwise set the alertOpenAI flag to true
  if (global.data.openai) {
    req.templateValues.openai = global.data.openai
  } else {
    req.templateValues.alertOpenAI = true
  }

  // If we have latlong in the global.data then pass them into the template,
  // otherwise set the alertLatLong flag to true
  if (global.data.latlong) {
    req.templateValues.latlong = global.data.latlong
  } else {
    req.templateValues.alertLatLong = true
  }

  // If the custom prompt file doesn't exist then set the alertCustomPrompt flag to true
  const customPromptFile = path.join(__dirname, '../../../data/custom_prompt.json')
  if (!fs.existsSync(customPromptFile)) {
    req.templateValues.alertCustomPrompt = true
    const defaultPromptFile = path.join(__dirname, '../../../data/default_prompt.json')
    const defaultPrompt = JSON.parse(fs.readFileSync(defaultPromptFile, 'utf8'))
    req.templateValues.customPrompt = defaultPrompt
  } else {
    const customPrompt = JSON.parse(fs.readFileSync(customPromptFile, 'utf8'))
    req.templateValues.customPrompt = customPrompt
  }

  // If we don't have any alerts then we want to pass in a allDone=true
  if (!req.templateValues.alertOpenAI && !req.templateValues.alertLatLong && !req.templateValues.alertCustomPrompt) {
    req.templateValues.allDone = true
  }

  return res.render('admin/index', req.templateValues)
}
