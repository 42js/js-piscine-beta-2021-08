const express = require('express');
const app = express();
const station = require('./routers/station');
const line = require('./routers/line');

const PORT = 4242;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/station', station);
app.use('/line', line);

app.use((req, res, next) => {
	res.status(404).send('일치하는 주소가 없습니다!');
});
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('서버 에러!'); 
});

app.listen(PORT, () => {
	console.log("Server running at http://localhost:4242/")
});