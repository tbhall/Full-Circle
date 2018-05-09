const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Get the API route ...
const api = require('./routes/api.route');
const app = express();
// var apiRouter = require('./api/api.route');


/**
 * MongoDB Configuration
 */
 mongoose.Promise = require('bluebird');
 mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
   .then(() =>  console.log('connection succesful'))
   .catch((err) => console.error(err));


 // view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');

/**
 * Express Configuration
 */
app.use(logger('dev'));
// Allow for parsing json or urls out of request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Allow for storing and retrieving of cookies
app.use(cookieParser());
// Use /api to hit the api router which handles all backend api routes
// app.use('/api',apiRouter);

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure passport-local to use account model for authentication
const Account = require('./models/account.model');
passport.use(new LocalStrategy(Account.authenticate()));

passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//Use the API routes in api.route.js
app.use(api);

/**
 * Serve Angular 4 frontend
 */
// Angular DIST output folder
app.use(express.static('../angular/dist'));

// Set all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../angular/dist/index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
