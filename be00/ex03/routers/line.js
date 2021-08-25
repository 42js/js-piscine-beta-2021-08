const express = require('express');
const _ = require('lodash');
const path = require('path');
const router = express.Router();

const fs = require('fs');
const jsonFile = fs.readFileSync(
    __dirname + '/../seoul_metro_station.json'
);
const jsonData = JSON.parse(jsonFile);
const stationData = jsonData.DATA;

router.get('', (req, res) => {
    const line_num = req.query.line_num;
    const body = _.filter(stationData, (station) => {
        return station.line_num === line_num;
    });
    if (body === undefined) 
        throw Error("Station Not Found : station name invalid.");
	res.status(200);
    res.end(JSON.stringify(body, null, 2));
})

module.exports = router;