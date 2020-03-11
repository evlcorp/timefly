const app = require('./app')
const ip = require('ip')
const { port, mongodbURI } = require('./config')
const mongoose = require('mongoose')

mongoose.connect(mongodbURI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => {
    console.log('DB is connected...')
  })

app.listen(port, () => {
  console.log(`
    App is ready on:
      - your network: http://${ip.address()}:${port}
      - localhost: http://localhost:${port}
  `)
})
