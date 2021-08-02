const express = require("express");
const router = express.Router();
const registerModel = require("../models/register");
const correctAnswersDB = require("../models/correctAnswersGiven");
const ObjectId = require("mongoose").Types.ObjectId;

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/register", (req, res)=>{
    // res.send(req.body);
    registerModel.find((err, data)=>{
        if(!err){
            res.send(data);
        }
        else{
            res.render("Error in retreiving data from database");
        }
    })
})

router.post("/register", async (req, res)=>{


    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);
    const hashedConfirmPassword = await bcryptjs.hash(req.body.confirmPassword, salt);

    const emailExists = await registerModel.findOne({email : req.body.email});
    if(emailExists){
        res.send("Email Already Exists");
    }

    const registerUsers = new registerModel({
        "firstname":req.body.firstname,
        "lastname":req.body.lastname,
        "mobile":req.body.mobile,
        "email":req.body.email,
        "password":hashedPassword,
        "confirmPassword":hashedConfirmPassword
    })

    try{
        const saveduser = await registerUsers.save();
        res.send(saveduser);
    }
    catch(err){
        res.status(400).send(err);
    }

})

router.post('/login', async(req, res)=>{
    const userExists = await registerModel.findOne({email : req.body.email});
    if(!userExists){
        res.send("Email does not exist");
    }

    const validPassword = await bcryptjs.compare(req.body.password, userExists.password);
    if(!validPassword){
        res.send("Invalid Password");
    }

    const token = jwt.sign({id:userExists._id}, "vishvap");

    res.header("auth-token", token);

    res.status(200).json({
        "message" : "Login Successfull",
        "token" : token
    })
})

router.post("/startTest", (req, res)=>{
    res.send("Test Started Successfully!");
})

router.get("/endTest/:NumberOfCorrectAnswers", (req, res)=>{
    var totalCorrectAnswers = req.params.NumberOfCorrectAnswers;
    res.send(totalCorrectAnswers);
})


module.exports = router;