const { logger } = require('../infrastructure/logger')

const log = (level, req, args) => {
  args[0] = `TXID="%s" USERID="%s" ${args[0]}`
  args.splice(1, 0, req.txid)
  args.splice(2, 0, req.userid)
  logger[level].apply(logger, args)
}

const handler = (req, res, next) => {
  req.logger = {
    info () {
      const args = Array.prototype.slice.call(arguments)
      log('info', req, args)
    },
    error () {
      const args = Array.prototype.slice.call(arguments)
      log('error', req, args)
    },
    debug () {
      const args = Array.prototype.slice.call(arguments)
      log('debug', req, args)
    }
  }

  return next()
}

module.exports = handler
