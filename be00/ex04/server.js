const express = require('express');
const validator = require('./my_validator');
const app = express();
const PORT = 4242;

app
    .use(express.json())
    .use(validator)
    .post('/main', (req, res) => {
        res
            .status(200)
            .send({'result': 'true'});
    })
    .use((req, res, next) => {
        res
            .status(404)
            .send('일치하는 주소가 없습니다!');
    })
    .use((err, req, res, next) => {
        console.error(err.stack);
        res
            .status(500)
            .send({'result': 'false'});
    });

app.listen(PORT, () => {
    console.log("Server running at http://localhost:4242/");
});