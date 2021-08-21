const express = require('express');
const cookieParser = require('cookie-parser');
const passRouter = require('./routes/pass');

const port = 80;

const app = express();
app.use(cookieParser());

app.use('/pass', passRouter);
app.use('*', (req, res) => {
  res.status(404).send({ msg: 'Not Found' });
});

app.listen(port);
