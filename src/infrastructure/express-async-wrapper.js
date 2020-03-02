var http = require('http')

const asyncRoute = route => (req, res, next) => {
  const cr = route(req, res)

  cr.then(ret => {
    if (ret instanceof http.ServerResponse) {
      res.end()
    } else {
      res.json(ret).end()
    }
  }).catch(err => {
    next(err)
  })
}

module.exports = asyncRoute
