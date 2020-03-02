const handler = (req, res, next) => {
  req.txid = req.headers.txid

  if (!req.txid) {
    req.txid = '-'
  }

  return next()
}

module.exports = handler
