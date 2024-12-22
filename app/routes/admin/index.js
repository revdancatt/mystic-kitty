import fs from 'fs'
import path from 'path'

export function index (req, res) {
  // If we have openai in the global.data then pass them into the template
  if (global.data.openai) req.templateValues.openai = global.data.openai

  return res.render('admin/index', req.templateValues)
}

// This is the askForOpenAIAPI page
export function askForOpenAIAPI (req, res) {
  // If we have been posted some data then we need to do something here
  if (req.method === 'POST') {
    // If we've been passed an apiKey then we need to add it to the data.json file
    if (req.body.apiKey) {
      // Load in the data.json file
      const dataPath = path.join(process.cwd(), 'data', 'data.json')
      const data = fs.readFileSync(dataPath, 'utf8')
      const dataObj = JSON.parse(data)
      // If the openai object doesn't exist then we need to create it
      if (!dataObj.openai) dataObj.openai = {}
      // Add the API key and chat model to the data.json file
      dataObj.openai.API_KEY = req.body.apiKey
      dataObj.openai.CHAT_MODEL = req.body.chatModel
      // Write the data.json file
      fs.writeFileSync(dataPath, JSON.stringify(dataObj, null, 2))
      // Put all the data into the global data object
      global.data = dataObj

      // If we've been passed redirect on the url as a url params then we want to console log it
      if (req.query.redirect) {
        if (req.query.redirect === 'admin') {
          return res.redirect('/admin')
        }
      }

      return res.redirect('/')
    }
  }

  // If we have openai in the global.data then pass them into the template
  if (global.data.openai) req.templateValues.openai = global.data.openai

  return res.render('admin/askForOpenAIAPI', req.templateValues)
}
