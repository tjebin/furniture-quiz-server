module.exports = (app) => {
    const questionService = require("../services/questions/questions-service")
    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    const createQuestion = (req, res) => {
        return questionService.createQuestion(req.body)
            .then(attempt => {
                res.send(attempt)
            })
    }

    const deleteQuestion = (req, res) => {
        questionService.deleteQuestion(req.params.questionId)
            .then(attempt => res.send(attempt))
    }

    const updateQuestion = (req, res) => {
        questionService.updateQuestion(req.params.questionId, req.body)
            .then(attempt => res.send(attempt))
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.get('/api/questions/:qid', (req, res) =>
        questionService.findQuestionById(req.params['qid'])
            .then(question => res.json(question)))
    app.post("/api/questions", createQuestion)
    //  app.post("/api/quizzes/questions", createQuestion)
    app.delete('/api/questions/:questionId', deleteQuestion);
    app.put('/api/questions/:questionId', updateQuestion);
}

