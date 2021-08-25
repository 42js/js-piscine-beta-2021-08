const fs = require('fs');
const metroJSON = JSON.parse(fs.readFileSync("./seoul_metro_station.json"));

const getByName = (req, res) => {
    const name = req.params.name;
    let data;
    for (let i = 0; i < metroJSON.DATA.length; i++) {
        if (metroJSON.DATA[i].station_nm === name) {
            data = metroJSON.DATA[i];
            break ;
        }
        else if (metroJSON.DATA[i].station_nm_eng === name) {
            data = metroJSON.DATA[i];
            break ;
        }
    }
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    res.end(JSON.stringify(data));
};

const getByLineNum = (req, res) => {
    let lineNum = req.query.line_num;
    if (!lineNum) lineNum = "01호선";
    let data = [];
    for (let i = 0; i < metroJSON.DATA.length; i++) {
        if (metroJSON.DATA[i].line_num === lineNum) {
            data.push(metroJSON.DATA[i]);
        }
    }
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    res.end(JSON.stringify(data));
};

const postById = (req, res) => {
    let body;
    req.on("data", (data) => {
        body = JSON.parse(data);
    });
    req.on("end", () => {
        if (!body.fr_code) {
            res.writeHead(500);
            res.end("error: send fr_code");
        } else {
            let data;
            for (let i = 0; i < metroJSON.DATA.length; i++) {
                if (metroJSON.DATA[i].fr_code === body.fr_code) {
                    data = metroJSON.DATA[i];
                }
            }
            res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
            res.end(JSON.stringify(data));
        }
    })
};

module.exports = { getByName, getByLineNum, postById };