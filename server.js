var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
require('./app/db/config.js');
var api = require('./app/router/api')(router);
var path = require('path');

//app.use(express.static( __dirname + '/public' ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',api);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/app/public/app/view/index.html'));
});

app.listen(port, function (err) {
    if (err) throw err;
    console.log('http://127.0.0.1:8080');
});