/* eslint-disable no-console */
const express = require('express');
const usersRouter = require('./routes/users');
const { sequelize } = require('./models/index');

const app = express();
const port = 4242;

const notFound = { message: 'Not Found' };
const notAcceptable = { message: 'Not Acceptable' };

sequelize.sync();

app.use(express.json())
  .use((err, req, res, next) => {
    if (err) res.status(406).send(notAcceptable);
    next();
  });

app.use('/users', usersRouter)
  .all('*', (req, res) => {
    res.status(404).send(notFound);
  });

app.listen(port, () => {});
