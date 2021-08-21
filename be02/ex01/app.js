const express = require('express');
const app = express();
const pass = require('./pass');

const err = {ERR: '404 Not Found'};
const port = 4242;

app.use('/pass', pass);

app.use((req, res, next) => res.send(err));

app.listen(port, () => console.log(`Port ${port} is running`));