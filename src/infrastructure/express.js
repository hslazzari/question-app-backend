const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('../modules/routes')
const { logs } = require('./config')
const user = require('../middlewares/user')
const txid = require('../middlewares/txid')
const mlogger = require('../middlewares/logger')
const { logger } = require('./logger')

/**
 * Express instance
 * @public
 */
const app = express()

// request logging
app.use(
  morgan(
    logs,
    {
      'stream': {
        write: message => {
          logger.info(message.replace(/(\r\n\t|\n|\r\t)/gm, ''))
        }
      }
    }
  )
)

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// secure apps by setting various HTTP headers
app.use(helmet())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// adds user to req object
app.use(user)

// adds txid to req object
app.use(txid)

// logger for request
app.use(mlogger)

// mount api routes
app.use('/', routes)

// verson and status endpoints
app.use('/version', express.static(path.join(__dirname, '../../manifest.json')))
app.get('/status', (req, res) => res.send('ok'))

module.exports = app
