const express = require('express')
const router = express.Router()
const swagger = require('swagger-ui-express')
const pJson = require('../package.json')
const yaml = require('yamljs')
const swaggerdoc = yaml.load('public/swagger.yaml')
const address = `/${pJson.name}/v${pJson.version}`

module.exports = () => {
    router.use('/swagger', swagger.serve, swagger.setup(swaggerdoc))

    return router
}
