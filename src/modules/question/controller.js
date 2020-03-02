const { QuestionService } = require('../services')

const QuestionController = {}

QuestionController.enabledQuestion = async (req, res) => {
  req.logger.debug('Getting all questions')
  return QuestionService.findEnabled()
}

QuestionController.answerQuestion = async (req, res) => {
  req.logger.info('Answering question')
  await QuestionService.answerQuestion(req.userid, req.body)
  res.sendStatus(200)
}

module.exports = QuestionController
