const { createLogger, format, transports } = require('winston')
const { MESSAGE } = require('triple-beam')
const { logLevel } = require('./config')

const { combine, splat } = format

const logger = createLogger({
  level: logLevel,
  format: combine(
    splat(),
    format(info => {
      info[MESSAGE] = `${new Date().toISOString()} ${info.level.toUpperCase()} - ${info.message}`.replace(/(\r\n\t|\n|\r\t)/gm, '')
      return info
    })()
  ),
  transports: [
    new transports.Console()
  ]
})

module.exports = {
  logger,
  level: logLevel
}
