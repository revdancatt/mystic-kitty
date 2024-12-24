import express from 'express'
import fs from 'fs'
import path from 'path'

import * as main from './main/index.js'
import * as admin from './admin/index.js'

const router = express.Router()

// Always run this as middleware so we can set up the template values and global data
router.use(function (req, res, next) {
  req.templateValues = {}

  const d = new Date()
  req.templateValues.today = {
    day: d.getDate(),
    month: d.getMonth() + 1
  }

  // If there's no global.data then we need to read in the file
  if (!global.data) {
    const dataDir = path.join(process.cwd(), 'data')
    // Create the data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
    const dataFile = path.join(dataDir, 'data.json')
    // If the data file doesn't exist then we need to create it
    if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, '{}')
    const data = fs.readFileSync(dataFile, 'utf8')
    global.data = JSON.parse(data)
  }

  // If there's no openai.apiKey and we aren't already on the admin page then redirect to that page
  // Check if we have OpenAI API key data
  if (!global.data.openai?.API_KEY) {
    // Skip redirect if we're already on the API key page to avoid infinite loop
    if (req.path !== '/admin') {
      return res.redirect('/admin')
    }
  }

  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.get('/', main.index)

router.get('/admin', admin.index)
router.post('/admin', admin.index)

export default router
