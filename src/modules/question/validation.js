const Joi = require('joi')

const questionObj = Joi.object().keys({
  questionId: Joi.number(),
  answer: Joi.array().items(Joi.string())
})

const AnwserSchema = Joi.object().keys({
  question: Joi.array().items(questionObj)
})

const validateSchema = (questionType) => {
  switch (questionType.type) {
    case 'single_choice':
    case 'single_choice_conditional':
      return Joi.array().items(Joi.string().valid(questionType.options)).length(1)
    case 'number_range':
      return Joi.array().items(Joi.number().min(questionType.range.from).max(questionType.range.to)).length(1)
    case 'single_choice_picture':
      return Joi.array().items(Joi.string().valid(questionType.options.reduce((acc, obj) => {
        acc.push(obj.id);
        return acc;
      }, []))).length(1)
  }
}

const validateAnswer = (response, question) => {
  const schema = validateSchema(question.question_type)
  Joi.assert(response.answer, schema, 'Invalid response')
}

module.exports = { AnwserSchema, validateAnswer }
