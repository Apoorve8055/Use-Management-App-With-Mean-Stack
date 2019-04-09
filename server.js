var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
require('./app/db/config.js');
var api = require('./app/router/api')(router);
var ctrl = require('./app/controller/controller');
var path = require('path');

// middleware /
app.use(express.static(path.join(__dirname, 'app/public/app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',api);
app.use('/',ctrl.index)
// middleware */


var server = app.listen(port, function (err) {
    if (err) throw err;
    console.log('http://127.0.0.1:'+server.address().port);
});