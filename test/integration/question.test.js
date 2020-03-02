
const supertest = require('supertest')
const { expect } = require('chai')
const app = require('../../src/infrastructure/server')

const headers = {
  userid: 'test',
  txid: 'fake'
}

describe('End-to-End Question Test', () => {
  let server
  let request

  before((done) => {
    server = app.listen(done)
    request = supertest.agent(server)
  })

  after((done) => {
    server.close(done)
  })

  it('Should return 200 get question', async () => {
    return request.get('/question')
      .set(headers)
      .expect(200)
      .then(res => {
        expect(res.text).to.be.equal('[]')
      })
  })
})
