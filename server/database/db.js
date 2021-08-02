const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/OnlineAssessment", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connected with DataBase successfully`);
}).catch((e)=>{
    console.log(`Error in making connection with DataBase`);
})