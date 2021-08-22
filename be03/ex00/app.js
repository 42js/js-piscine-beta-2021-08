const express = require('express');
const app = express();

const index = require('./route/index');

const port = 4242;

app.use('/', index);

app.listen(port, () => console.log(`Port ${port} is running`));