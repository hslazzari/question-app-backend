const http = require('http')
const app = require('./express')
const { logger } = require('./logger')

const httpServer = http.createServer(app)

httpServer.on('close', () => {
  logger.info('Server stopped!')
})

httpServer.on('listening', () => {
  logger.info('Server started!')
})

module.exports = httpServer
