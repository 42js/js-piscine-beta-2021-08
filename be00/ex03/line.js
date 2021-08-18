const express = require('express');
const _ = require('lodash');
const router = express.Router();

const metroAPI = require('./metroAPI.js');
const stations = metroAPI.stations;
const NotFound = { 404: "Not Found" };

router.get('', (req, res) => {
  let line_num;
  if (req.query['line_num'] === undefined) {
    line_num = '01호선';
  } else {
    line_num = req.query['line_num'];
  }
  const line = _.filter(stations, (station) => {
    return station['line_num'] === line_num;
  })
  if (line.length === 0) {
    res.status(404).setHeader('Content-Type', 'application/json').send(NotFound);
  }
  else {
    res.status(200).send(line);
  }
});

module.exports = router;
