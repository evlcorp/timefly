const app = require('./app')
const { port } = require('./config')
const ip = require('ip')

app.listen(port, () => {
  console.log(`
    App is ready on:
      - your network: http://${ip.address()}:${port}
      - localhost: http://localhost:${port}
  `)
})
