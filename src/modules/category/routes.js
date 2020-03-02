const express = require('express')
const asyncRoute = require('../../infrastructure/express-async-wrapper')
const { CategoryController } = require('../controllers')

const router = express.Router()

router
  .route('/')
  .get(asyncRoute(CategoryController.enabledCategory))

module.exports = router
