require('dotenv').config();
const development = {
    "username": process.env.NAME,
    "password": process.env.PW,
    "database": process.env.DB,
    "host": process.env.DBHOST,
    "dialect": process.env.DIALECT
  }

const test = {
  "username": process.env.NAME,
  "password": process.env.PW,
  "database": process.env.DB,
  "host": process.env.DBHOST,
  "dialect": process.env.DIALECT
  }
const production = {
  "username": process.env.NAME,
  "password": process.env.PW,
  "database": process.env.DB,
  "host": process.env.DBHOST,
  "dialect": process.env.DIALECT
  }
  module.exports = { development, production, test };