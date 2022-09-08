const quizzesService = require("../services/quizzes/quizzes-service")
const quizzesDao = require('../daos/quizzes-dao')

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.send(quizzes)
            })
    }
    const findQuizById = (req, res) => {
        const quizId = req.params['qid']
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                res.send(quiz)
            })
    }
    const createQuizz = (req, res) => {
        quizzesService.findQuizByFurnitureId(req.body.furnitureId)
            .then((quiz) => {
                if (quiz == undefined) {
                    return quizzesDao.createQuizz(req.body)
                        .then(attempt => res.send(attempt))
                } else {
                    res.send(quiz);
                }
            })
    }

    const findQuizByFurnitureId = (req, res) => {
        const furnitureId = req.params['fid'];
        quizzesService.findQuizByFurnitureId(furnitureId)
            .then((quiz) => {
                if (quiz == undefined) {
                    res.send({});
                } else {
                    res.send(quiz);
                }
            })
    }
    const deleteQuiz = (req, res) => {
        quizzesService.deleteQuiz(req.params.quizId)
            .then(attempt => res.send(attempt))
    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:qid", findQuizById)
    app.post("/api/quizzes", createQuizz)
    app.get("/api/furnitures/:fid/quizzes", findQuizByFurnitureId);
    app.delete('/api/quizzes/:quizId', deleteQuiz);
}

