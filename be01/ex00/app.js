const express = require('express');
const app = express();
const {sequelize} = require('./models'); // mySQL sequelize model
const PORT = 4242;

sequelize
    .sync()
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch(err => {
        console.error(err);
        console.log("Database connection error.");
        process.exit();
    }); // 서버가 실행될 때 seqeulize schema를 DB 에 적용시킨다
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});