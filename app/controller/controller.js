var express = require('express');
var app = express();
var path = require('path');

exports.index = app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '../../../app/public/app/view/pages/index.html'));
});

