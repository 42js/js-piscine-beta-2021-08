var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var passRouter = require('./routes/pass');
var app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/pass', passRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  console.log(err.message);
  if (err.name.match(/Token/g))
    res.json({
      "msg" : "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪",
      "reason": err.message
    });
  else
  res.json( {
    "msg" : "🍪 여권 발급 실패! 🍪",
    "reason": err.message 
  });
});

module.exports = app;
