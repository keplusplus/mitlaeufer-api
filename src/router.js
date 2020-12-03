const express = require('express')
const swagger = require('swagger-ui-express')
const yaml = require('yamljs')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const interface = require('./interface')
const swaggerdoc = yaml.load('public/swagger.yaml')
const router = express.Router()

console.log(interface.getMembers())

// EXAMPLE DATA - TEMPORARY
const data = {
  members: [
    {
      id: 'cfb05cd5-dde8-416d-949f-c6968b5714bd',
      username: 'hiker',
      displayname: 'Hiker',
      hikesJoined: 5,
      hikesLed: 4
    },
    {
      id: 'ae95a776-1764-4e32-b6c1-9dde22e011ac',
      username: 'mega144',
      displayname: 'MegaHiker',
      hikesJoined: 2,
      hikesLed: 1
    },
    {
      id: 'd9d71580-7923-4547-8da9-e2b0e499eabf',
      username: 'eggewanderer',
      displayname: 'eggewanderer',
      hikesJoined: 0,
      hikesLed: 0
    }
  ]
}

module.exports = () => {
  router.use(helmet())
  router.use(bodyParser.json())
  router.use(cors())
  router.use(morgan('combined'))

  router.use('/swagger', swagger.serve, swagger.setup(swaggerdoc))

  router.get('/', (req, res) => {
    res.send(data)
  })

  return router
}
