const express = require('express');
const { sequelize } = require('./models/index');
const accountRouter = require('./routes/account');

const app = express();
const port = 80;

const badRequest = { msg: 'Bad Request' };
const NotFound = { msg: 'Not Found' };

sequelize.sync();

app
  .use(express.json())
  .use((err, req, res, next) => {
    if (err) res.status(400).send(badRequest);
    else next();
  })
  .use('/account', accountRouter)
  .use('*', (req, res) => {
    res.status(404).send(NotFound);
  });

app.listen(port);
