const fs = require('fs');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const err = { Err: '404 Not Found'};

const parse = JSON.parse(fs.readFileSync('./seoul_metro_station.json'));

const api = parse.DATA;

router.get('', (req, res) => {
    let line_num;

    if (req.query['line_num'] == undefined) line_num = req.query['line_num'];
    else line_num = req.query['line_num'];
    
    let line = _.filter(api, (metro) => {
        return metro['line_num'] == line_num;
    });
    
    if (line.length == 0) res.send(err);
    else res.send(line);
});

module.exports = router;