const express = require('express')
const router = express.Router()
const swagger = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerdoc = yaml.load('public/swagger.yaml')

module.exports = () => {
    router.use('/swagger', swagger.serve, swagger.setup(swaggerdoc))

    return router
}
