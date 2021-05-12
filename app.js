var createError = require('http-errors');
var express = require('express');
var path = require('path');
var sequelize=require('./config/connection').sequelize
var Signup=require('./models/signup').Signup
var Session=require('./models/session').Session
var authenticate=require('./middlewares/authentication').authenticate
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Signup=require('./models/signup').Signup
var Session=require('./models/session').Session
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const fs=require('fs');
const { Order } = require('./models/orders');
async function db_op(){
try{
  await sequelize.authenticate()
  console.log("database connection made")
  //await Signup.sync({force:true})
  //await Session.sync({force:true})
  //await Order.sync({force:true})
}
catch(err)
{console.log("database error"+err)}
}
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('common',{stream:fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users',authenticate,usersRouter);

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
db_op()
module.exports = app;
