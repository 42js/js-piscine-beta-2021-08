const express = require('express');
const app = express();
const { sequelize } = require('./models'); // mySQL sequelize model
const PORT = 4242;

sequelize.sync(); // 서버가 실행될 때 seqeulize schema를 DB 에 적용시킨다
app.listen(PORT, () => {
	console.log("Server is running at http://localhost:4242");
})