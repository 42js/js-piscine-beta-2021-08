const express = require('express');
const lineRouter = require('./line');
const stationRouter = require('./station');

const app = express();
const port = 80;
const NotFound = { 404: "Not Found" };

app.use(express.json())
app.use('/line', lineRouter);
app.use('/station', stationRouter);
app.use((req, res, next) => {
  res.status(404).send(NotFound);
})

app.listen(port, () => {
  console.log('Server is running...');
});