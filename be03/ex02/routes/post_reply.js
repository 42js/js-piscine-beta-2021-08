const express = require('express');
const cookieParser = require('cookie-parser');
const authJwt = require('./auth/authJwt');
require('dotenv').config();
const { User, Post, Reply } = require('../models/index');

const router = express.Router();

const wrongApproach = { msg: 'Wrong approach' };

const isNonNegativeInt = (number) => {
  if (!number || Number.isNaN(number) || !Number.isInteger(parseFloat(number))) {
    return false;
  }
  if (parseInt(number, 10) < 0) {
    return false;
  }
  return true;
};

const userIdToUserName = async (userId) => {
  const users = await User.findAll({ where: { id: userId } });
  return users[users.length - 1].dataValues.username;
};

router
  .