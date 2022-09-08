const quizzesModel = require('../models/quizzes/quizzes-model')
const findAllQuizzes = () => quizzesModel.find()
//const findQuizById = (quizId) => quizzesModel.findById(quizId);
const findQuizById = (quizId) => quizzesModel.findById(quizId);
const createQuizz = (quizz) => quizzesModel.create(quizz);
const findQuizByFurnitureId = (furnitureId) => quizzesModel.findOne().where('furnitureId').equals(furnitureId);
const deleteQuiz = (quizId) => quizzesModel.deleteOne({ _id: quizId });

module.exports = { findAllQuizzes, findQuizById, createQuizz, findQuizByFurnitureId, deleteQuiz }
