const express = require('express');
const lineRouter = require('./line.js');
const stationRouter = require('./station.js');
const app = express();

app.use('/line', lineRouter);
app.use('/station', stationRouter);
