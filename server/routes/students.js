var express = require('express');
var students = express.Router();

const student = require('../models/student');

students.get('/',async function(req,res){
    try{
        const allStudents = await student.find();

        res.status(200).json(allStudents);
    }
    catch(error){
        res.status(404).json({message : error.message});
    }
});


students.post('/add',async function(req,res){
    const post = req.body;
    console.log(post);
    
    const newStudent = new student(post);
    console.log(newStudent);
    try{
       await newStudent.save();
       res.status(200).json(newStudent);    
    }
    catch(error){
        res.status(404).json({message : error.message});
    } 
});



module.exports = students;