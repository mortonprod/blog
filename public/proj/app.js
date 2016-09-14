///TODO:Note you must install mongo on your computer for this to work. npm just gives you the API for the software.
///Here:https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/ <<<< Must follow this to set up mongodb.
//After installation need to find:C:\Program Files\MongoDB\Server\3.2\bin and .exe file.
////MUST PASS DATABASE LOCATION. USE HELP TO FIND COMMAND TO SEPCIFY WERE THIS SHOULD BE PLACED.
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User = require('./models/user.ts'); // get our mongoose model
var routes = require('./routes/index');
var app = express();
////TODO:Note you must add all the files you want to server to the client here. These are the accessable files.
///So all paths, even in in the html files, must be retrieved by node. 
///This makes since the html will be sent and the javascript will be asked for afterwards from the browser.
app.use("/dist", express.static(__dirname + '/dist'));
////TODO:Note the path is from where node is run!!!!!!!!!!!!
app.get('/', function (req, res) {
    console.log("Where are we: " + __dirname);
    res.sendFile(path.join(__dirname, 'index.html'));
});

mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.get('/setup', function (req, res) {

    //TODO:Note:This is how we create a new user after setting up the db in models/user. The db will be created automatically.
    var nick = new User({
        name: 'Nick Cerminara',
        password: 'password',
        admin: true
    });

    // save the sample user
    nick.save(function (err) {
        if (err) {
            res.json({ success: false });
            throw err;
        }

        console.log('User saved successfully');
        res.json({ success: true });
    });
});

module.exports = app;
