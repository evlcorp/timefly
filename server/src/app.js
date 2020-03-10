const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const middleware = require('./middleware')
const router = require('./router')

const app = express()

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
app.use(middleware)

module.exports = app
