/// <reference path="../typings/index.d.ts" />
// get an instance of mongoose and mongoose.Schema
//import * as mongoose from 'mongoose';
var mongoose = require('mongoose');
///TODO:Note:If you install typings for something and it does not work make sure to add the typings for dependecies for module.
///ALSO REMEMBER THAT THE YOU OFTEN HAVE TO CHANGE "IMPORT MONGOOSE FROM ..." TO "IMPORT * AS MONGOOSE FROM ...". MAYBE A NAME ISSUE. 
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: Boolean
}));