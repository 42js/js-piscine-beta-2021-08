var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var passRouter = require('./routes/pass');
var app = express();

app.use(cookieParser());

app.use('/pass', passRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.json({"msg" : "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪"});
});

module.exports = app;
