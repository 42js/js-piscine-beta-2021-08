const express = require('express');
const mysql = require('mysql2');
const { sequelize } = require('./models/index');

const app = express();
const port = 4242;

const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '42overflow',
});

sequelize.sync().then(() => {
  DB.connect((err) => {
    if (err) throw err;
    console.log('database connected successfully.');
  });
});

app.listen(port, () => {});
