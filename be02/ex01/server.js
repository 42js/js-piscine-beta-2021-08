const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());

app.post("/pass", (req, res) => {
    console.log(req.body.username);
});

app.get("/pass", (req, res) => {
    console.log('get');
})

app.listen(4242, () => {
    console.log("Server running at http://localhost:4242/");
});