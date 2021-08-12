var express = require('express');
var colleges = express.Router();

const college = require('../models/college');

colleges.get('/',async function(req,res){
    try{
        const allColleges = await college.find();

        res.status(200).json(allColleges);
    }
    catch(error){
        res.status(404).json({message : error.message});
    }
});


colleges.post('/add',async function(req,res){
    const post = req.body;
    console.log(post);
    
    const newCollege = new college(post);
    console.log(newCollege);
    try{
       await newCollege.save();
       res.status(200).json(newCollege);    
    }
    catch(error){
        res.status(404).json({message : error.message});
    } 
});



module.exports = colleges;