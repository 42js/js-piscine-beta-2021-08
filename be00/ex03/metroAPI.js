const fs = require('fs');

const metroAPI = JSON.parse(fs.readFileSync('./seoul_metro_station.json'));
const stationArr = metroAPI.DATA;

exports.stations = stationArr;