import moment from 'moment'
import SunCalc from 'suncalc'
import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const getMoonPhase = (date) => {
  const moonIllumination = SunCalc.getMoonIllumination(date)
  const phase = moonIllumination.phase

  if (phase < 0.03 || phase > 0.97) return '🌑 The moon is currently New Moon'
  if (phase < 0.22) return '🌒 The moon is currently Waxing Crescent'
  if (phase < 0.28) return '🌓 The moon is currently First Quarter'
  if (phase < 0.47) return '🌔 The moon is currently Waxing Gibbous'
  if (phase < 0.53) return '🌕 The moon is currently Full Moon'
  if (phase < 0.72) return '🌖 The moon is currently Waning Gibbous'
  if (phase < 0.78) return '🌗 The moon is currently Last Quarter'
  return '🌘 The moon is currently Waning Crescent'
}

const getNextNewMoon = (date) => {
  const startDate = moment(date)
  let moonIllumination = null
  while (moonIllumination !== '🌑 The moon is currently New Moon') {
    moonIllumination = getMoonPhase(startDate)
    startDate.add(1, 'hours')
  }
  // const phase = moonIllumination.phase
  return `🌑 Next New Moon: ${moment(startDate).format('dddd, MMMM Do YYYY [at around] h a')}`
}

const getNextFullMoon = (date) => {
  const startDate = moment(date)
  let moonIllumination = null
  while (moonIllumination !== '🌕 The moon is currently Full Moon') {
    moonIllumination = getMoonPhase(startDate)
    startDate.add(1, 'hours')
  }
  return `🌕 Next Full Moon: ${moment(startDate).format('dddd, MMMM Do YYYY [at around] h a')}`
}

const getSunriseAndSunset = (latitude, longitude) => {
  const times = SunCalc.getTimes(new Date(), Number(latitude.toFixed(1)), Number(longitude.toFixed(1)))
  const sunrise = times.sunrise.getHours() + ':' + times.sunrise.getMinutes()
  const sunset = times.sunset.getHours() + ':' + times.sunset.getMinutes()
  return {
    sunrise,
    sunset
  }
}

export const index = async (req, res) => {
  const solsticesAndEquinoxes = await import('../../modules/solstices-and-equinoxes/index.js')
  const events = solsticesAndEquinoxes.getEvents()

  const mostRecentEvent = events[events.length - 1]
  mostRecentEvent.dateOnly = moment(mostRecentEvent.dateTime).format('YYYY-MM-DD')
  // Calculate the days since the last event
  mostRecentEvent.daysSince = moment().diff(moment(mostRecentEvent.dateOnly), 'days')
  // If daysSinceLastEvent is negative, subtract a year from mostRecentEvent dateTime
  if (mostRecentEvent.daysSince < 0) {
    const adjustedDateTime = moment(mostRecentEvent.dateOnly).subtract(1, 'year')
    mostRecentEvent.dateOnly = adjustedDateTime.toISOString()
    mostRecentEvent.daysSince = moment().diff(moment(mostRecentEvent.dateOnly), 'days')
  }
  mostRecentEvent.isNow = mostRecentEvent.daysSince === 0

  // Calculate the days until the next event
  const nextEvent = events[0]
  nextEvent.dateOnly = moment(nextEvent.dateTime).format('YYYY-MM-DD')
  nextEvent.daysUntil = moment(nextEvent.dateOnly).diff(moment(), 'days')
  nextEvent.isNow = nextEvent.daysUntil === 0
  req.templateValues.solsticesAndEquinoxes = {
    mostRecentEvent,
    nextEvent
  }

  // Build the phrases for the most recent and next events
  const mostRecentPhrase = mostRecentEvent.isNow
    ? `${mostRecentEvent.emoji} Today is ${mostRecentEvent.name} (${mostRecentEvent.type})`
    : `${mostRecentEvent.emoji} It's been ${mostRecentEvent.daysSince} day${mostRecentEvent.daysSince !== 1 ? 's' : ''} since ${mostRecentEvent.name} (${mostRecentEvent.type})`

  const nextPhrase = nextEvent.isNow
    ? `${nextEvent.emoji} Today is ${nextEvent.name} (${nextEvent.type})`
    : `${nextEvent.emoji} It's ${nextEvent.daysUntil} day${nextEvent.daysUntil !== 1 ? 's' : ''} until ${nextEvent.name} (${nextEvent.type})`

  req.templateValues.solsticesAndEquinoxes = {
    mostRecentEvent: {
      ...mostRecentEvent,
      phrase: mostRecentPhrase
    },
    nextEvent: {
      ...nextEvent,
      phrase: nextPhrase
    }
  }

  const moonInfo = {
    phase: getMoonPhase(moment().toISOString()),
    nextNewMoon: getNextNewMoon(moment().toISOString()),
    nextFullMoon: getNextFullMoon(moment().toISOString())
  }
  req.templateValues.moonInfo = moonInfo

  req.templateValues.showAdvice = true

  // If there's no latitude and longitude then we need to redirect to the admin page
  if (!global.data.latlong) {
    req.templateValues.showAdvice = false
    req.templateValues.noLatLong = true
    return res.render('main/index', req.templateValues)
  }

  // If there's no custom prompt then we need to redirect to the admin page
  const customPromptFile = path.join(__dirname, '../../../data/custom_prompt.json')
  if (!fs.existsSync(customPromptFile)) {
    req.templateValues.showAdvice = false
    req.templateValues.noCustomPrompt = true
    return res.render('main/index', req.templateValues)
  }

  const sunInfo = getSunriseAndSunset(52.7079469, -2.7545193)
  req.templateValues.sunInfo = sunInfo

  // Get today's date and time in a human readable format
  const now = moment()
  req.templateValues.currentDateTime = now.format('dddd, MMMM Do YYYY [at] h:mm a')

  const adviceDir = path.join(__dirname, '../../../advice')
  // If it doesn't exist create it
  if (!fs.existsSync(adviceDir)) fs.mkdirSync(adviceDir, { recursive: true })
  const todaysAdviceFile = path.join(adviceDir, `${now.format('YYYY-MM-DD')}.md`)

  // Get a directory listing of the most recent 14 files in the advice directory that follow the pattern YYYY-MM-DD.md (that are not today's file)
  const adviceFiles = fs.readdirSync(adviceDir).filter(file => file.match(/^\d{4}-\d{2}-\d{2}\.md$/) && file !== `${now.format('YYYY-MM-DD')}.md`).sort((a, b) => new Date(b.match(/^\d{4}-\d{2}-\d{2}\.md$/)[0]) - new Date(a.match(/^\d{4}-\d{2}-\d{2}\.md$/)[0])).reverse()

  const prompts = {
    head: '',
    shaping: '',
    tail: ''
  }

  const customPrompt = JSON.parse(fs.readFileSync(customPromptFile, 'utf8'))
  prompts.head = customPrompt.prompt_head
  prompts.shaping = customPrompt.prompt_shaping
  prompts.tail = customPrompt.prompt_tail

  if (!fs.existsSync(todaysAdviceFile) || req.query.tryagain === 'true') {
    console.log('About to call the AI...')
    // If the file doesn't exist then we need to do the whole build up a prompt for Kitty the AI
    const messages = []

    messages.push({
      role: 'system',
      content: prompts.head
    })

    messages.push({
      role: 'user',
      content: `The current date (it's VERY IMPORTANT to get this right as everything else depends on it) is ${now.format('dddd, MMMM Do YYYY')}. 
      
      ${mostRecentPhrase}
      ${nextPhrase}
      🌄 Today the sun rises at ${sunInfo.sunrise} 🌅 and sets at ${sunInfo.sunset}
      ${moonInfo.phase}
      ${moonInfo.nextNewMoon}
      ${moonInfo.nextFullMoon}   `
    })

    // If there's any recent advice files then add them to the prompt
    if (adviceFiles.length > 0) {
      let pastAdvice = ''
      // Loop through the advice files and add them to the pastAdvice string
      for (const file of adviceFiles) {
        pastAdvice += '\n\nThe advice for ' + file.replace('.md', '') + ' (YYYY-MM-DD format, pay attention) was:\n\n' + fs.readFileSync(path.join(adviceDir, file), 'utf8')
      }
      messages.push({
        role: 'user',
        content: `This is the advice you gave for the past ${adviceFiles.length} days, from most recent to oldest...
        
        ${pastAdvice}
        
        Please take this into account when giving advice for today, so we can keep track of the flow of advice already given and the context it was given in, (and to help reduce too much repetition).
        `
      })
    }

    // Now tag on the actual request for the advice for today
    messages.push({
      role: 'user',
      content: prompts.shaping
    })

    messages.push({
      role: 'user',
      content: prompts.tail
    })

    const chatgpt = await import('../../modules/chatgpt/index.js')

    const tokenCount = await chatgpt.getTokenCount(messages)
    const tokenCost = await chatgpt.getTokenInputCost(tokenCount)
    console.log('Token count:', tokenCount)
    console.log('Token input cost:', tokenCost)

    const gptResponse = await chatgpt.gptCompletion(messages)

    const tokenOutputCost = await chatgpt.getTokenOutputCost(gptResponse.text)
    console.log('Token output cost:', tokenOutputCost)

    if (gptResponse && gptResponse.text) {
      fs.writeFileSync(todaysAdviceFile, gptResponse.text, 'utf8')
    }

    if (req.query.tryagain === 'true') {
      return res.redirect('/')
    }
  }

  // Read in the contents of the todaysAdviceFile
  const todaysAdvice = fs.readFileSync(todaysAdviceFile, 'utf8')

  req.templateValues.todaysAdvice = marked.parse(todaysAdvice)
  req.templateValues.todaysAdviceRAW = todaysAdvice

  // Load in the contents of the index.md file which lives in the same directory as this file
  return res.render('main/index', req.templateValues)
}
