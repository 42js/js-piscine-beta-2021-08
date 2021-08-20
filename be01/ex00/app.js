const express = require("express");
const app = express();
const sequelize = require('./models').sequelize;

sequelize.sync();