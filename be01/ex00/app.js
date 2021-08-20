/* eslint-disable no-console */
const express = require('express');
const { sequelize } = require('./models/index');

const app = express();
const port = 4242;

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => {});
