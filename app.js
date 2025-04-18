var createError = require('http-errors');
var express = require('express');
var session = require('cookie-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registrationRouter = require('./routes/registration')
var mainRouter = require('./routes/main')
var signInRouter = require('./routes/signin')
var historyRouter = require('./routes/history')
var profileRouter = require('./routes/profile')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
  secret: 'secret',
  resave: false,            
  saveUninitialized: false,  
  cookie: { 
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 
    }
})); 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/registration', registrationRouter )
app.use('/main', mainRouter )
app.use('/signin', signInRouter )
app.use('/history', historyRouter )
app.use('/profile', profileRouter )

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
