require('dotenv').config()

const MONGO_URI = `${process.env.REACT_APP_MONGO_URI}`


const express = require('express')
const app = express();

const mongoose = require('mongoose');


mongoose.connect(MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true });


// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const demos = require('./controllers/demo-controller');
demos(app);

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)
require('./controllers/quiz-attempts-controller')(app)


app.listen(process.env.PORT || 3000);

app.get('/', function routeHandler(req, res) {
    res.send(' This is the quiz  server......');
});


