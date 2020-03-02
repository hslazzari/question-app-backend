const express = require('express')
const categoryRoutes = require('./category/routes')
const questionRoutes = require('./question/routes')

const router = express.Router()

router.use('/category', categoryRoutes)

router.use('/question', questionRoutes)

module.exports = router
