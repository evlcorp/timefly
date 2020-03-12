const app = require('./app')
const ip = require('ip')
const { port, mongodbUri } = require('./config')
const mongoose = require('mongoose')

mongoose.connect(mongodbUri, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true
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
