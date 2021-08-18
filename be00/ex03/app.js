const express = require('express');
const fs = require('fs');
const _ = require('lodash');

const app = express();
const port = 80;

app.use(express.json())

const metroAPI = JSON.parse(fs.readFileSync('./seoul_metro_station.json'));
const stationArr = metroAPI.DATA;

const NotFound = { 404: "Not Found" };


app
  .use((req, res, next) => {
    res.status(404).send(NotFound);
})
  .get('/line', (req, res) => {
  let line_num;
  if (req.query['line_num'] === undefined) {
    line_num = '01호선';
  } else {
    line_num = req.query['line_num'];
  }
  const line = _.filter(stationArr, (station) => {
    return station['line_num'] === line_num;
  })
  if (line.length === 0) {
    res.status(404).setHeader('Content-Type', 'application/json').send(NotFound);
  }
  else {
    res.status(200).send(line);
  }
})
  .get('/station/:name', (req, res) => {
  try {
    const name = req.params.name;
    if (name === undefined) throw 404;

    // find English station name
    if (/^[a-zA-Z ]*$/.test(name)) {
      const station = _.find(stationArr, (station) => {
        return station['station_nm_eng'] === name;
      })
      if (station === undefined) throw 404;
      res.status(200).send(station);

    // find Korean station name
    } else {
      const station = _.find(stationArr, (station) => {
        return station['station_nm'] === name;
      })
      if (station === undefined) throw 404;
      res.status(200).send(station);
    }
  } catch (code) {
    res.status(code).setHeader('Content-Type', 'application/json').send(NotFound);
  }
})
  .post('/station/id', (req, res) => {
  try {
    const code = req.body;
    if (code === undefined || code ['fr_code'] === undefined) throw 404;
    const station = _.find(stationArr, (station) => {
      return station['fr_code'] === code['fr_code'];
    })
    if (station === undefined) throw 404;
    res.status(200).send(station);
  } catch (code) {
    res.status(code).setHeader('Content-Type', 'application/json').send(NotFound);
  }
})

app.listen(port, () => {
  console.log('Server is running...');
});