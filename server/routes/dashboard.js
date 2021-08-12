var express = require('express');

var dashboard = express.Router();

dashboard.get('/',function(req,res){
    res.send('Hello World');
});


module.exports = dashboard;