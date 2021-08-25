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

router
    .get('/:name', (req, res) => {
        const name = req.params.name;
        console.log(`name : ${name}`);
        if (/^[a-zA-Z ]*$/.test(name)) {
            const body = _.find(stationData, (station) => {
                return station.station_nm_eng === name;
            });
            if (body === undefined) 
                throw Error("Station Not Found : station name invalid.");
			res.status(200);
            res.end(JSON.stringify(body, null, 2));
        } else if (/^[가-힣]*$/.test(name)) {
            const body = _.find(stationData, (station) => {
                return station.station_nm === name;
            });
            if (body === undefined) 
                throw Error("Station Not Found : station name invalid.");
			res.status(200);
            res.end(JSON.stringify(body, null, 2));
        } else {
            console.error("Param Error : name params is invalid.");
        }
    })
    .post('/id', (req, res) => {
        const reqbody = req.body;
        const body = _.find(stationData, (station) => {
            return station.fr_code === reqbody.fr_code;
        });
		console.log(reqbody);
        if (body === undefined) 
            throw Error("Station Not Found : station name invalid.");
		res.status(200);
        res.end(JSON.stringify(body, null, 2));
    });

module.exports = router;