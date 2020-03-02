const { QuestionModel, AnswerModel } = require('./model')
const { AnwserSchema, validateAnswer } = require('./validation')
const Joi = require('joi')
const QuestionService = {}

QuestionService.create = async (params) => {
  return QuestionModel.create(params)
}

QuestionService.addAnswer = async (params) => {
  const { questionId, userid } = params

  return AnswerModel.updateOne({ questionId, userid }, params, { upsert: true })
}

QuestionService.find = async () => {
  return QuestionModel
    .aggregate()
    .match({ enabled: true })
    .sort({ category: 1, questionId: 1 })
}

QuestionService.findEnabled = async () => {
  const questions = await QuestionService.find()

  if (questions.length === 0) {
    return []
  }

  const result = questions.reduce((acc, obj) => {
    if (!acc.questions) {
      acc.questions = []
    }

    if (acc[obj.category] === undefined) {
      acc[obj.category] = acc.questions.length
      acc.questions.push({ name: obj.category, questions: [] })
    }

    acc.questions[acc[obj.category]].questions.push(obj)
    return acc
  }, {})

  return result.questions
}

QuestionService.answerQuestion = async (userid, body) => {
  Joi.assert(body, AnwserSchema)
  const { question } = body

  const questionDef = (await QuestionService.find({})).reduce((acc, value) => {
    acc[value.questionId] = value
    return acc
  }, {})
  question.forEach((response) => {
    validateAnswer(response, questionDef[response.questionId])
  })

  const addResponses = question.reduce((acc, response) => {
    const inputResponse = { userid, ...response }
    acc.push(QuestionService.addAnswer(inputResponse))
    return acc
  }, [])

  await Promise.all(addResponses)
}

module.exports = QuestionService
