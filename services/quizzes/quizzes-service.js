
const quizzesDao = require('../../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid);
const createQuizz = (quizz) => quizzesDao.createQuizz(quizz);
const findQuizByFurnitureId = (furnitureId) => quizzesDao.findQuizByFurnitureId(furnitureId);
const deleteQuiz = (quizId) => quizzesDao.deleteQuiz(quizId);

module.exports = { findAllQuizzes, findQuizById, createQuizz, findQuizByFurnitureId, deleteQuiz }