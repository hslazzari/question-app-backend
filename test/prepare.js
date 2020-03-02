const prepare = require('mocha-prepare')
const { MongoMemoryServer } = require('mongodb-memory-server')
const { databaseConnect } = require('../src/infrastructure/mongoose')

const mongod = new MongoMemoryServer()

let mongooseInst

prepare(async done => {
  const uri = await mongod.getConnectionString()
  mongooseInst = await databaseConnect(uri)
  done()
}, done => {
  mongooseInst.disconnect(() => {
    mongod.stop().then(() => {
      done()
    })
  })
})
