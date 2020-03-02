const express = require('express')
const asyncRoute = require('../../infrastructure/express-async-wrapper')
const { QuestionController } = require('../controllers')

const router = express.Router()

router
  .route('/')
  .get(asyncRoute(QuestionController.enabledQuestion))

router
  .route('/')
  .post(asyncRoute(QuestionController.answerQuestion))

module.exports = router
