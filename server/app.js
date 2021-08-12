require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

//Require Routes
var dashboard = require("./routes/dashboard");
var students = require('./routes/students');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.use(cors());


//Setting up routes
app.use("/",dashboard);
app.use('/students',students);

const port = process.env.PORT || 5000;
mongoose.connect(`mongodb+srv://Prateek:${process.env.PASSWORD}@cluster0.rbleb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})
.then(()=>app.listen(port,()=>console.log(`Server running on Port: ${port}`)))
.catch((error)=>console.log(error));

//Only for the warnings
mongoose.set('useFindAndModify',false);


  