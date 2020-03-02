const process = require('process')

const config = {
  port: process.env.PORT,
  logs: 'TXID=":req[txid]" USERID=":req[userid]" METHOD=":method" ELAPSEDTIME=":response-time"',
  logLevel: process.env.LOG_LEVEL,
  mongo: {
    uri: process.env.MONGO_URI
  }
}

module.exports = config
