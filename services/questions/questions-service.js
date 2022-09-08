
const questionsDao = require('../../daos/questions-dao')
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)
const createQuestion = (question) => questionsDao.createQuestion(question);
const deleteQuestion = (questionId) => questionsDao.deleteQuestion(questionId);
const updateQuestion = (questionId, question) => questionsDao.updateQuestion(questionId, question);

module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz, createQuestion, deleteQuestion, updateQuestion }