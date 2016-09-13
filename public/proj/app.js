var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();
////TODO:Note you must add all the files you want to server to the client here. These are the accessable files.
app.use("/dist", express.static(__dirname + '/dist'));
////TODO:Note the path is from where node is run!!!!!!!!!!!!
app.get('/', function (req, res) {
    console.log("Where are we: " + __dirname);
    res.sendFile(path.join(__dirname, 'index.html'));
});

///app.use('/', routes);

module.exports = app;
