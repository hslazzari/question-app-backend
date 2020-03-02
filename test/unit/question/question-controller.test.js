const { expect } = require('chai')
const { QuestionModel, AnswerModel } = require('../../../src/modules/question/model')
const QuestionController = require('../../../src/modules/question/controller')

const addQuestions = async () => {
  const questionOne = {
    questionId: 1,
    disabled: false,
    enabled: true,
    question: 'Q1',
    category: 'fact',
    question_type: {
      type: 'single_choice',
      options: [
        'one',
        'two'
      ]
    }
  }

  const questionTwo = {
    questionId: 2,
    disabled: false,
    enabled: true,
    question: 'Q2',
    category: 'fact',
    question_type: {
      type: 'single_choice_conditional',
      options: [
        'yes',
        'maybe',
        'no'
      ]
    }
  }

  const questionThree = {
    questionId: 3,
    disabled: false,
    enabled: false,
    question: 'Q3',
    category: 'fact',
    question_type: {
      type: 'number_range',
      range: {
        from: 10,
        to: 50
      }
    }
  }

  await Promise.all([QuestionModel.create(questionOne), QuestionModel.create(questionTwo), QuestionModel.create(questionThree)])
}

describe('QuestionController - Unit test', () => {
  afterEach(async () => {
    await QuestionModel.deleteMany({})
    await AnswerModel.deleteMany({})
  })

  it('Should return empty question', async () => {
    const req = {
      logger: {
        debug: () => {}
      }
    }

    const result = await QuestionController.enabledQuestion(req, null)

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('array').that.is.empty
  })

  it('Should return a question', async () => {
    const req = {
      logger: {
        debug: () => {}
      }
    }

    await addQuestions()

    const result = await QuestionController.enabledQuestion(req, null)

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('array').to.have.lengthOf(1)
  })

  it('Should answer a question', async () => {

    const answerObj = {
      question: [{
        questionId: 1,
        answer: ['one']
      }]
    }

    const req = {
      logger: {
        info: () => {}
      },
      userid: 'test',
      body: answerObj
    }

    const res = {
      sendStatus: () => {}
    }

    await addQuestions()

    await QuestionController.answerQuestion(req, res)

    const result = await AnswerModel.find({})

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('array').to.have.lengthOf(1)
  })
})
