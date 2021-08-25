const express = require("express");
const fs = require("fs");
const _ = require("lodash");

const router = express.Router();
const err = { "Error": "404 Not Found" };

router.get('', (req, res) => {
    let metro;
    let data;
    
    if (fs.existsSync("./seoul_metro_station.json")) {
        metro = JSON.parse(fs.readFileSync("./seoul_metro_station.json"));
        data = metro.DATA;
    } else res.send(err);

    let line_num = req.query["line_num"];
    let line = _.filter(data, (seoul_metro) => {
        return seoul_metro["line_num"] === line_num;
    });

    if (line.length === 0) res.send(err);
    else res.send(line);
});

module.exports = router;