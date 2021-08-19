const express = require('express');
const _ = require('lodash');
const router = express.Router();

const metroAPI = require('./metroAPI.js');
const stations = metroAPI.stations;
const NotFound = { 404: "Not Found" };

router.get('/:name', (req, res) => {
  try {
    const name = req.params.name;
    if (name === undefined) throw 404;

    // find English station name
    if (/^[a-zA-Z ]*$/.test(name)) {
      console.log('asdf');
      const station = _.find(stations, (station) => {
        return station['station_nm_eng'] === name;
      })
      if (station === undefined) throw 404;
      res.status(200).send(station);

    // find Korean station name
    } else {
      const station = _.find(stations, (station) => {
        return station['station_nm'] === name;
      })
      if (station === undefined) throw 404;
      res.status(200).send(station);
    }
  } catch (code) {
    res.status(code).setHeader('Content-Type', 'application/json').send(NotFound);
  }
})
  .post('/id', (req, res) => {
  try {
    const code = req.body;
    if (code === undefined || code ['fr_code'] === undefined) throw 404;
    const station = _.find(stations, (station) => {
      return station['fr_code'] === code['fr_code'];
    })
    if (station === undefined) throw 404;
    res.status(200).send(station);
  } catch (code) {
    res.status(code).setHeader('Content-Type', 'application/json').send(NotFound);
  }
});

module.exports = router;