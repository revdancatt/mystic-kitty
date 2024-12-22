import moment from 'moment'
import SunCalc from 'suncalc'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const getMoonPhase = (date) => {
  const moonIllumination = SunCalc.getMoonIllumination(date)
  const phase = moonIllumination.phase

  if (phase < 0.03 || phase > 0.97) return '🌑 New Moon'
  if (phase < 0.22) return '🌒 Waxing Crescent'
  if (phase < 0.28) return '🌓 First Quarter'
  if (phase < 0.47) return '🌔 Waxing Gibbous'
  if (phase < 0.53) return '🌕 Full Moon'
  if (phase < 0.72) return '🌖 Waning Gibbous'
  if (phase < 0.78) return '🌗 Last Quarter'
  return '🌘 Waning Crescent'
}

const getNextNewMoon = (date) => {
  const startDate = moment(date)
  let moonIllumination = null
  while (moonIllumination !== '🌑 New Moon') {
    moonIllumination = getMoonPhase(startDate)
    startDate.add(1, 'hours')
  }
  // const phase = moonIllumination.phase
  return `🌑 Next New Moon: ${moment(startDate).format('dddd, MMMM Do YYYY [at around] h a')}`
}

const getNextFullMoon = (date) => {
  const startDate = moment(date)
  let moonIllumination = null
  while (moonIllumination !== '🌕 Full Moon') {
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
  // Set timezone to London GMT
  process.env.TZ = 'Europe/London'
  const solsticesAndEquinoxes = await import('../../modules/solstices-and-equinoxes/index.js')
  const events = solsticesAndEquinoxes.getEvents()

  const mostRecentEvent = events[events.length - 1]

  // Calculate the days since the last event
  mostRecentEvent.daysSince = moment().diff(moment(mostRecentEvent.dateTime), 'days')
  // If daysSinceLastEvent is negative, subtract a year from mostRecentEvent dateTime
  if (mostRecentEvent.daysSince < 0) {
    const adjustedDateTime = moment(mostRecentEvent.dateTime).subtract(1, 'year')
    mostRecentEvent.dateTime = adjustedDateTime.toISOString()
    mostRecentEvent.daysSince = moment().diff(moment(mostRecentEvent.dateTime), 'days')
  }
  mostRecentEvent.isNow = mostRecentEvent.daysSince === 0

  // Calculate the days until the next event
  const nextEvent = events[0]
  nextEvent.daysUntil = moment(nextEvent.dateTime).diff(moment(), 'days')
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
  const adviceFiles = fs.readdirSync(adviceDir).filter(file => file.match(/^\d{4}-\d{2}-\d{2}\.md$/) && file !== `${now.format('YYYY-MM-DD')}.md`).sort((a, b) => new Date(b.match(/^\d{4}-\d{2}-\d{2}\.md$/)[0]) - new Date(a.match(/^\d{4}-\d{2}-\d{2}\.md$/)[0]))

  if (!fs.existsSync(todaysAdviceFile)) {
    // If the file doesn't exist then we need to do the whole build up a prompt for Kitty the AI
    const messages = []

    messages.push({
      role: 'system',
      content: `You are Mystical Kitty, an AI personal assistant who is helping Dan (male) and Nixie (female) with their daily lives. They are both 52 years old and live in Shrewsbury, Shropshire, UK. They are trying to live their live aligned with the wheel of the year. You are like an expert in the wheel of the year and witch like mystical things, you are also a bit of a wise old owl, but also very modern, practical and up to date with the latest news and events. Each day, you are going to provide some advice and guidance to them based on the current date and taking location into account. Here is some useful information...
      
      Monday to Friday is the working week, Saturday and Sunday is the weekend. Dan general goes to his art studio on Monday, Tuesday, Wednesday, Thursday and Friday and stays home on the Weekend. Nixie is a bit more free and flexible, but generally stays home as she has more aches and pains.

      Dan's birthday is on the 15th of February. Nixie's birthday is on the 27th of February.
      `
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

    console.log(messages)
  }

  /*
  const todaysAdvice = fs.readFileSync(todaysAdviceFile, 'utf8')
    req.templateValues.todaysAdvice = todaysAdvice
    */
  // Load in the contents of the index.md file which lives in the same directory as this file
  return res.render('main/index', req.templateValues)
}
