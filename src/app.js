const express = require('express')
const app = express()
const port = 8080
const router = require('./router')()
const pJson = require('../package.json')
const routePrefix = `/${pJson.name}/v${pJson.version.split('.')[0]}`

app.use(routePrefix, router)

app.listen(port, () => {
  console.log(`Listening for requests on port ${port}...`)
})
