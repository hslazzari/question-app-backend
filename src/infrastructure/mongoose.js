const mongoose = require('mongoose')
const { logger } = require('./logger')

mongoose.Promise = global.Promise

const connectionErrorHandler = err => {
  logger.error('Error connection to mongo', err)
  process.exit(-1)
}

const databaseConnect = (uri) => new Promise((resolve, reject) => {
  mongoose.set('debug', (coll, method, query, doc) => {
    logger.debug(
      'TXID="%s" USERID="%s" COLLECTION="%s" METHOD="%s" QUERY="%o" DOC="%o"',
      undefined,
      undefined,
      coll,
      method,
      query,
      doc
    )
  })

  mongoose.connection.on('connected', () => logger.info('Connected to database!'))

  mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {
      const db = mongoose.connection

      mongoose.connection.db.on('close', () => logger.info('Closing database connection!'))

      db.on('error', connectionErrorHandler)

      resolve(mongoose)
    })
    .catch(reject)
})

module.exports = {
  databaseConnect,
  connectionErrorHandler
}
