const { expect } = require('chai')
const { QuestionModel, AnswerModel } = require('../../../src/modules/question/model')
const { QuestionService } = require('../../../src/modules/services')

const headers = {
  userid: 'test',
  txid: 'txidtest'
}

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
    enabled: true,
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

  const questionFour = {
    questionId: 4,
    disabled: false,
    enabled: true,
    question: 'Q3',
    category: 'fact',
    question_type: {
      type: 'single_choice_picture',
      options: [
        {
          id: 'one',
          pictureUrl: "url"
        },
        {
          id: 'two',
          pictureUrl: "urlTwo"
        },
      ]
    }
  }

  await Promise.all([QuestionService.create(questionOne), QuestionService.create(questionTwo), QuestionService.create(questionThree)], QuestionService.create(questionFour))
}

describe('QuestionService - Unit test', () => {
  afterEach(() => {
    QuestionModel.deleteMany({})
    AnswerModel.deleteMany({})
  })

  it('Should return empty question', async () => {
    const result = await QuestionService.findEnabled()
    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('array').that.is.empty
  })

  it('Should return a question', async () => {
    const question = {
      questionId: 1,
      disabled: false,
      enabled: true,
      question: 'Q1',
      category: 'fact',
      question_type: {}
    }

    await QuestionService.create(question)

    const result = await QuestionService.findEnabled()
    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('array').that.is.not.empty  
  })

  it('Should return no answer', async () => {
    const questionOne = {
      questionId: 1,
      disabled: false,
      enabled: true,
      question: 'Q1',
      category: 'fact',
      question_type: {}
    }

    const questionTwo = {
      questionId: 2,
      disabled: false,
      enabled: true,
      question: 'Q1',
      category: 'fact',
      question_type: {}
    }

    await QuestionService.create(questionOne)
    await QuestionService.create(questionTwo)

    const answer = await AnswerModel.find({})
    // eslint-disable-next-line no-unused-expressions
    expect(answer).to.be.an('array').that.is.empty
  })

  it('Should return validation error - Question 1', async () => {

    await addQuestions()

    const answerObj = {
      question: [{
        questionId: 1,
        answer: ['A']
      }]
    }
    try {
      await QuestionService.answerQuestion(headers.userid, answerObj)
    } catch (error) {
      expect(error).to.have.property('name', 'ValidationError')
    }
  })

  it('Should return valid answer - Question 1', async () => {

    await addQuestions()

    const answerObj = {
      question: [{
        questionId: 1,
        answer: ['one']
      }]
    }

    await QuestionService.answerQuestion(headers.userid, answerObj)

    const result = await AnswerModel.find()

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('array').that.is.not.empty
  })

  it('Should return validation error - Question 2', async () => {

    await addQuestions()

    const answerObj = {
      question: [{
        questionId: 2,
        answer: ['A']
      }]
    }
    try {
      await QuestionService.answerQuestion(headers.userid, answerObj)
    } catch (error) {
      expect(error).to.have.property('name', 'ValidationError')
    }
  })

  it('Should return valid answer - Question 2', async () => {

    await addQuestions()

    const answerObj = {
      question: [{
        questionId: 2,
        answer: ['yes']
      }]
    }

    await QuestionService.answerQuestion(headers.userid, answerObj)

    const result = await AnswerModel.find()

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('array').that.is.not.empty
  })

  it('Should return validation error - Question 3', async () => {

    await addQuestions()

    const answerObj = {
      question: [{
        questionId: 3,
        answer: ['A']
      }]
    }
    try {
      await QuestionService.answerQuestion(headers.userid, answerObj)
    } catch (error) {
      expect(error).to.have.property('name', 'ValidationError')
    }
  })

  it('Should return validation error - Question 3 - min', async () => {

    await addQuestions()

    const answerObj = {
      question: [{
        questionId: 3,
        answer: ['0']
      }]
    }
    try {
      await QuestionService.answerQuestion(headers.userid, answerObj)
    } catch (error) {
      expect(error).to.have.property('name', 'ValidationError')
    }
  })

  it('Should return validation error - Question 3 - max', async () => {

    await addQuestions()

    const answerObj = {
      question: [{
        questionId: 3,
        answer: ['60']
      }]
    }
    try {
      await QuestionService.answerQuestion(headers.userid, answerObj)
    } catch (error) {
      expect(error).to.have.property('name', 'ValidationError')
    }
  })

  it('Should return valid answer - Question 3', async () => {

    await addQuestions()

    const answerObj = {
      question: [{
        questionId: 3,
        answer: ['40']
      }]
    }

    await QuestionService.answerQuestion(headers.userid, answerObj)

    const result = await AnswerModel.find()

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('array').that.is.not.empty
  })


  it('Should return question with type single_choice_picture', async () => {

    await addQuestions()
    const result = await QuestionModel.find({questionId : 4})

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('array').that.is.not.empty
    expect(result[0].question_type).to.have.property('type');
    expect(result[0].question_type.type === 'single_choice_picture').to.be.true

  })

  it('Should answer question with type single_choice_picture', async () => {

    const answerObj = {
      question: [{
        questionId: 4,
        answer: ['one']
      }]
    }

    await QuestionService.answerQuestion(headers.userid, answerObj)

    const result = await AnswerModel.find()

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('array').that.is.not.empty

    
  })
})

