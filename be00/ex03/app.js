const express = require('express');
const line = require('./line');
const station = require('./station');
const app = express();
const port = 4242;
const err = { Err: '404 Not Found'};

app.use('/line', line);
app.use('/station', station);
app.use((req, res, next) => res.send(err));

app.listen(port, () => console.log(`Port ${port} is running`));