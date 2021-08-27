const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 4242;
const {sequelize} = require('./models/index');

sequelize
    .sync()
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch((err) => {
        console.error(err);
        console.log("Database connection error.");
        process.exit();
    });
app
    .use(morgan("tiny"))
    .listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });