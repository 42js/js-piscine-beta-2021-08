// router setting
const express = require('express');
const userRouter = express.Router();
// db sequelize
const models = require('../models');
// controller setting
const userController = require('../controller/userController');

userRouter
    .get('/', userController.findAll)
	.get('/:id', userController.findOne)
    .post('/', userController.create);

module.exports = userRouter;