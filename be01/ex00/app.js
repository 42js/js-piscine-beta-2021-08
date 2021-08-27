var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var { sequelize } = require('./models')
var app = express();
var port = 4242;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require('./routes/users')
sequelize.sync().then(() => {
//sequelize.authenticate().then(() => {
    console.log('Database connected successfully.');
}).catch((err) => {
    console.log(err.message);
});
app.use('/users',userRouter);
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
  res.json(err.message)
});
app.listen(port,()=>{
    console.log(`${port} is running`);
});
module.exports = app;
