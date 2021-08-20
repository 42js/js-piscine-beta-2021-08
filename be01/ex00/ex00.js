const express = require('express');
const app = express();
const port = 4242;
const mysql = require('mysql');
const { Sequelize } = require('sequelize');
const seq = new Sequelize();

async function create(){
	try
	{
		await seq.authenticate();
		console.log("Connection has been established");
	}
	catch (err)
	{
		console.error(err);
	}
};

crate();
app.listen(port, ()=>{});
