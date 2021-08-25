const express = require('express');
const my_validator = require('./my_validator');

const app = express();

const server = app.listen(4242, () => {
    console.log('Server running at http://localhost:4242/')
});

app.post("/", (req, res) => {
    my_validator(req, res);
});

app.post("/main", (req, res) => {
    my_validator(req, res);
});