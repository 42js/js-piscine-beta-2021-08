// router setting
const express = require('express');
const userRouter = express.Router();
// db sequelize
const models = require('../models');
// controller setting
const userController = require('../controller/userController');

userRouter
	.post('/signin', userController.signin)
	.post('/signup', userController.signup)
	.post('/auth', userController.auth)
    .get('/', userController.findAll)
	.get('/:id', userController.findOne);

module.exports = userRouter;
