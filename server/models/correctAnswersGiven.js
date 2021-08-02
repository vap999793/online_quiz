const mongoose = require("mongoose");

const correctAnswersGiven = new mongoose.Schema({
    questionNumber : {
        type : Number,
        required : true
        // unique : true
    },

    question : {
        type : String,
        required : true
    },
    optionA : {
        type:String,
        required:true
    },
    optionB : {
        type:String,
        required:true
    },
    optionC : {
        type:String,
        required:true
    },
    optionD : {
        type:String,
        required:true
    },
    correctOption : {
        type:String,
        required:true
    },
    

})

const correctAnswersGivenByCandidates = new mongoose.model("CorrectAnswer", correctAnswersGiven);

module.exports = correctAnswersGivenByCandidates;