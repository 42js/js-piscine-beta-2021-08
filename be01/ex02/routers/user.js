// router setting
const express = require('express');
const userRouter = express.Router();
// db sequelize
const models = require('../models');
// controller setting
const userController = require('../controller/userController');

userRouter.post('/', userController.create);

module.exports = userRouter;