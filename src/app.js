const express = require('express')
const swagger = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerdoc = yaml.load('public/swagger.yaml')
const app = express()
const port = 8080

app.use('/swagger', swagger.serve, swagger.setup(swaggerdoc))

app.listen(port, () => {
  console.log(`Listening for requests on port ${port}...`)
})
