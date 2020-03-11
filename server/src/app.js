const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const customMiddleware = require('./middleware')
const router = require('./router')

const app = express()

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5000',
    'https://ecorp-timefly.herokuapp.com/'
  ]
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Setup logger
app.use(morgan('combined'))

// Serve static files
app.use(express.static(path.join(__dirname, '../../client/build')))

// Setup router
app.use(router)

// Custom middleware
app.use(customMiddleware)

module.exports = app
