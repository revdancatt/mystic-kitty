import 'dotenv/config'
import path from 'path'
import express from 'express'
import exphbs from 'express-handlebars'
import routes from './app/routes/index.js'
import bodyParser from 'body-parser'
import http from 'http'

// Write the process ID to pid.txt
import fs from 'fs'
import * as helpers from './app/helpers/index.js'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
fs.writeFileSync('pid.txt', process.pid.toString())

// Check if .env file exists and has PORT defined
if (!process.env.PORT) {
  console.error('\nError: .env file is missing or PORT is not defined')
  console.error('Please create a .env file with PORT=nnnn where nnnn is the port number')
  console.error('')
  process.exit(1)
}

const app = express()
const hbs = exphbs.create({
  extname: '.html',
  partialsDir: path.join(__dirname, 'app', 'templates', 'includes'),
  helpers: {
    // Add helper methods here that will be available in templates
    ...helpers
  }
})
app.engine('html', hbs.engine)
app.set('view engine', 'html')
app.locals.layout = false
app.set('views', path.join(__dirname, 'app', 'templates'))
app.use(
  express.static(path.join(__dirname, 'app', 'public'), {
    'no-cache': true
  })
)
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use('/', routes)
app.use((request, response) => {
  response.status(404).render('static/404')
})
console.log(`Server running on port ${process.env.PORT}`)
console.log(`http://localhost:${process.env.PORT}/`)
console.log()
http.createServer(app).listen(process.env.PORT)
