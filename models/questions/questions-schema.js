const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const questionsSchema = mongoose.Schema({
    _id: Number,
    title: String,
    question: String,
    correct: String,
    answer: String,
    image: String,
    quizId: String,
    type: { type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'FILL_BLANKS'] },
    choices: [String]
}, { collection: "questions" })

questionsSchema.plugin(AutoIncrement, {
    startAt: 100,
    incrementBy: 100
});


module.exports = questionsSchema