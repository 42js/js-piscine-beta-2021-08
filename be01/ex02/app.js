// express setting
const express = require('express');
const app = express();
const PORT = 4242;
// routers setting
const user = require('./routers/user');
// middleware setting
const morgan = require('morgan');
// db sequelize setting
const {sequelize} = require('./models');

sequelize
    .sync({force:false})
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch(err => {
        console.error(err);
        console.log("Database connection error.");
        process.exit();
    });

app
	.use(express.json())
    .use(morgan("tiny"))
	.use('/users', user)
	.use((req, res, next) => {
		res.status(404).send('일치하는 주소가 없습니다!');
	})
	.use((err, req, res, next) => {
		console.error(err.stack);
		res.status(500).send('서버 에러!');
	})
    .listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });