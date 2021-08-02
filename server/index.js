const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./database/db");
const registerDB = require("./models/register");
const registerCandidates = require("./controllers/registerCandidates");

const questionsDb = require("./models/questions");
const questionsRoutes = require("./controllers/questions");

const app = express();

const port = process.env.port || 5000

// Middlewares
app.use(cors('http://localhost:4200'))
app.use(express.static('public/client'));
app.use(express.json());
app.use(bodyParser.json());
app.use("/candidates", registerCandidates);
app.use("/questions", questionsRoutes);




app.get("/", (req, res)=>{
    res.send("Online Assessment project");
})

app.listen(port, ()=>{
    console.log(`Server is running at PORT : ${port}`);
})