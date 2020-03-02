const mongoose = require('mongoose')

const Schema = mongoose.Schema

const QuestionSchema = new Schema(
  {
    questionId: { type: Number, required: true },
    disabled: { type: Boolean, required: true },
    enabled: { type: Boolean, required: true },
    question: { type: String, required: true },
    category: { type: String, required: true },
    question_type: {}
  }, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: false
  }
)

QuestionSchema.index({ enabled: 1, questionId: 1 })

QuestionSchema.index({ enabled: 1, category: 1 })

const QuestionModel = mongoose.model('Question', QuestionSchema, 'question')

const AnswerSchema = new Schema(
  {
    questionId: { type: Number, required: true },
    userid: { type: String, required: true },
    answer: [String]
  }, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: false
  }
)

AnswerSchema.index({ questionId: 1, userid: 1 })
AnswerSchema.index({ userid: 1 })

const AnswerModel = mongoose.model('Answer', AnswerSchema, 'answer')

module.exports = { QuestionModel, AnswerModel }
