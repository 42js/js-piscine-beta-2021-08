const express = require('express');
const metroApi = require('./apis.js');

const app = express();

const server = app.listen(4242, () => {
    console.log('Server running at http://localhost:4242/');
});

app.get("/station/:name", (req, res) => {
    metroApi.getByName(req, res);
});

app.get("/line", (req, res) => {
    metroApi.getByLineNum(req, res);
});

app.get("/station/:engName", (req, res) => {
    metroApi.getByName(req, res);
});

app.post("/station/id", (req, res) => {
    metroApi.postById(req, res);
});