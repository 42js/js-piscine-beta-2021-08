var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//########################routers
var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signup');
var logoutRouter = require('./routes/logout');
var loginRouter = require('./routes/login');
var postRouter = require('./routes/post');
//########################sequelize
const { swaggerUi, specs } = require('./routes/swagger');
const { sequelize } = require('./models')
//sequelize.authenticate().then(() => {
sequelize.sync().then(() => {
  console.log('😀😀😀😀😀😀DB Connected😀😀😀😀😀😀😀')
}).catch((err) => {
  console.log('🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬',err.message)
});

var app = express();
const port = 4242;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/logout', logoutRouter);
app.use('/login', loginRouter);
app.use('/post', postRouter);

//########################ERROR HANDLER
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  if (err.status == 599)
    err.message = "invalid contents"
  res.status(err.status || 500).json(err.message);
});
//########################ERROR HANDLER

app.listen(port, ()=>{
  console.log(`${port} is running`)
})

module.exports = app;
