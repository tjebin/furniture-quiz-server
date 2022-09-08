const mongoose = require("mongoose")
const quizzesSchema = mongoose.Schema({
    _id: String,
    title: String,
    furnitureId: String,
    quizId: String,
    questions: [{
        type: String,
        ref: 'QuestionsModel'
    }]
}, { collection: "quizzes" })

module.exports = quizzesSchema