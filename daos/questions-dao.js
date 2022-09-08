const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qzid) => {
    return questionsModel.find({ quizId: qzid })
}
const removeQuestionById = (questionId) => questionsModel.deleteOne({ _id: questionId });
const createQuestion = (question) => questionsModel.create(question);
const deleteQuestion = (questionId) => questionsModel.deleteOne({ _id: questionId });
const updateQuestion = (questionId, question) =>
    questionsModel.findByIdAndUpdate(questionId,
        {
            question: question.question,
            title: question.title,
            correct: question.correct,
            choices: question.choices,
            answer: question.answer,
            image: question.image
        });

module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz, createQuestion, removeQuestionById, deleteQuestion, updateQuestion }