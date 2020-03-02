
const handler = (req, res, next) => {
  req.userid = req.headers.userid
  return next()
}

module.exports = handler
