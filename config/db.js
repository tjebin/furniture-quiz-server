require('dotenv').config()


const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');

const db = `${process.env.REACT_APP_MONGO_URI}`;
const connectDB = async () => {
    try {
        await mongoose.createConnection(db, {
            useNewUrlParser: true
        });
        console.log("MongoDB connected ... !!");
    } catch (err) {
        console.log(err.message);
        ProcessingInstruction.exit(1);
    }
}

module.exports = connectDB;