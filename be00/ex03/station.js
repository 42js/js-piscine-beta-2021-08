const fs = require('fs');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const err = { Err: '404 Not Found'};

const parse = JSON.parse(fs.readFileSync('./seoul_metro_station.json'));

const api = parse.DATA;

router.get('/:name', (req, res) => {
    try {
        let name = req.params.name;
        let station;

        if (/[a-zA-Z]/.test(name)) {
            station = _.find(api, (metro) => {
                return metro['station_nm_eng'] == name;
            });
        }
        else {
            station = _.find(api, (metro) => {
                return metro['station_nm'] == name;
            });
        }
        if (station.length == 0) res.send(err);
        else res.send(station);
    }
    catch (e) {
        res.send(err);
    }
}).post('/:id', (req, res) => {
    try {
        let id = req.body;

        let station = _.find(api, (metro) => {
            return metro['fr_code'] == id['fr_code'];
        });
        if (station.length == 0) res.send(err);
        else res.send(station);
    }
    catch (e) {
        res.send(err);
    }
});

module.exports = router;