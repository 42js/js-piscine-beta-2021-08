const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize({
  host: config.host,
  username: config.username,
  password: config.password,
  database: config.database,
  dialect: 'mysql'
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
