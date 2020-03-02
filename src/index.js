const server = require('./infrastructure/server')
const { databaseConnect } = require('./infrastructure/mongoose')
const { port, mongo } = require('./infrastructure/config')
const { logger } = require('./infrastructure/logger')

const Entrypoint = require('@pm2/io').Entrypoint
let mongooseInstance
let serverInstance

new class App extends Entrypoint { // eslint-disable-line no-new
  onStart (cb) {
    logger.info('Starting application...')

    databaseConnect(mongo.uri)
      .then((inst) => {
        mongooseInstance = inst
        serverInstance = server.listen(port)
        cb()
      })
      .catch(error => {
        logger.error('Error starting application: %o', error)
        cb(error)
      })
  }

  onStop (err, cb, code, signal) { // eslint-disable-line handle-callback-err
    logger.info(`Stopping application`)
    mongooseInstance.disconnect(() => {
      logger.info('Mongoose disconnected')
      serverInstance.close(cb)
    })
  }

  sensors () {
    // do nothing
  }

  actuators () {
    // do nothing
  }
}()
