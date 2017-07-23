var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); // similar to entity framework in ASP

var appRoutes = require('./routes/app'); // imports module from app.js

// initializes the express engine
var app = express();

// initialize mongoose connection
mongoose.connect('localhost:27017/node-angular');

// view engine setup
app.set('views', path.join(__dirname, 'views')); // tells express where the view folder lives
app.set('view engine', 'hbs'); // which view engine to use, determines what to use to parse the html

// Utilize middleware below to extract data from the request

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // static public folder that makes so it only this part of the application
                                                         // is accessible from outside
// middleware for CORS

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/', appRoutes); // forward requests to appRoutes

// if we can't find a fitting route in the appRoutes and returned to here, we catch it below

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
