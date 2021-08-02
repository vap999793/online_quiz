const router = require("express").Router();
const questionsDB = require("../models/questions");
const correctAnswersDB = require("../models/correctAnswersGiven");

router.get("/", (req, res) => {
    questionsDB.find((err, data) => {
        if (!err) {
            res.send(data);
        }
        else {
            console.log("Error in retreiving questions database");
        }
    })
})

router.post("/", async (req, res) => {
    const questions = new questionsDB({
        "questionNumber": req.body.questionNumber,
        "question": req.body.question,
        "optionA": req.body.optionA,
        "optionB": req.body.optionB,
        "optionC": req.body.optionC,
        "optionD": req.body.optionD,
        "correctOption": req.body.correctOption
    })

    try {
        const savedquestions = await questions.save();
        res.send(savedquestions);
    }
    catch (err) {
        res.status(400).send(err);
    }
})

router.get("/:questionNumber", (req, res) => {
    questionsDB.find({ questionNumber: req.params.questionNumber }, (err, data) => {
        if (!err) {
            res.send(data);
        }
        else {
            console.log("Unable to find question from the database");
        }
    })
})

router.post("/:questionNumber", async (req, res) => {
    // { $and: [{ "by": "tutorials point" }, { "title": "MongoDB Overview" }] }
    questionsDB.find({ $and: [{ questionNumber: req.params.questionNumber }, { correctOption: req.body.correctOption }] }, async (err, data) => {
        if (!err) {

            if (Object.entries(data).length != 0) {

                console.log(data);

                const correctAnswers = new correctAnswersDB({
                    "questionNumber": req.params.questionNumber,
                    "question": data[0].question,
                    "optionA": data[0].optionA,
                    "optionB": data[0].optionB,
                    "optionC": data[0].optionC,
                    "optionD": data[0].optionD,
                    "correctOption": data[0].correctOption

                })

                // console.log(correctAnswers);
                correctAnswersDB.count(async (err, count) => {
                    if (!err && count >= 0) {
                        console.log(count);
                        console.log(correctAnswersDB.length);

                        try {
                            const savedCorrectAnswers = await correctAnswers.save();
                            console.log(`Correct answers saved successfully`);
                            res.send(savedCorrectAnswers);
                        }
                        catch (err) {
                            res.status(400).send(err);
                        }
                    }
                    // else if (!err && count > 0) {

                    //     correctAnswersDB.find({questionNumber:req.params.questionNumber}, async(err, data)=>{
                    //         if(!err && Object.entries(data).length>0){

                    //             correctAnswersDB.updateOne({ questionNumber: req.params.questionNumber },
                    //                 { $set: correctAnswers }, (err, data) => {
                    //                     if (!err) {
                    //                         return res.send(data);
                    //                     }
                    //                     else {
                    //                         return res.send(err);
                    //                     }
                    //                 })

                    //         }


                    //         else{
                    //             res.send(err);
                    //         }
                    //     })



                    // }
                    else {
                        res.send(err);
                    }
                });

            }
            else {
                res.send("Wrong Answer given");
            }


            // res.send(data[0].correctOption);

        }
        else {
            return res.send("You have chosen incorrect option : " + err);
        }
    })
})

router.get('/finish/test', (req, res) => {

    correctAnswersDB.count((err, count) => {
        if (!err) {
            console.log(count);
            res.send(`${count}`);

        }
        else {
            res.send(err);
        }
    })

})

router.post('/:questionNumber/:correctOption',(req, res) => {
    questionsDB.find({ questionNumber: req.params.questionNumber }, async(err, data) => {
        if (!err) {
            if (data[0].correctOption == req.params.correctOption) {

                const correctAnswers = new correctAnswersDB({
                    "questionNumber": req.params.questionNumber,
                    "question": req.body.question,
                    "optionA": req.body.optionA,
                    "optionB": req.body.optionB,
                    "optionC": req.body.optionC,
                    "optionD": req.body.optionD,
                    "correctOption": req.body.correctOption

                })

                const savedCorrectAnswers = await correctAnswers.save();
                console.log(`Correct answers saved successfully`);
                // res.send(savedCorrectAnswers);

                res.send(true);
            }
            else {
                
                correctAnswersDB.find({questionNumber:req.params.questionNumber}, async(err, data)=>{

                    console.log(data[0]);

                    if(!err && data.length!=0){
                        console.log(data.length);
                        correctAnswersDB.remove({questionNumber:req.params.questionNumber}, (err, data)=>{
                            console.log(data);
                        });

                    }
                    else{
                        console.log(err);
                    }
                    
                })

                res.send(false);
            }
        }
        else {
            res.send(err);
        }
    })
})

router.get('/finish/test', (req, res)=>{
    correctAnswersDB.count((err, count)=>{
        if(!err){
            console.log(count);
            if(count>0){
                correctAnswersDB.remove( { } );
            }
            // correctAnswersDB.remove({},(err,data)=>{
            //     if(!err){
            //         console.log(data);
            //     }
            //     else{
            //         console.log(err);
            //     }
                
            // });
            res.send(count);
        }
        else{
            console.log(err);
            correctAnswersDB.remove({},(err,data)=>{
                if(!err){
                    console.log(data);
                }
                else{
                    console.log(err);
                }
                
            });
            res.send(err);
        }
    })
})



module.exports = router;