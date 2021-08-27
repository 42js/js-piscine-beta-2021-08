const express = require('express');
const app = express();
const {sequelize} = require('./models/index');

sequelize.sync()
	.then(() => {
		console.log("Database connected successfully.");
	})
	.catch((err) => {
		console.error(err);
		console.log("Database connection error.");
		process.exit();
	});