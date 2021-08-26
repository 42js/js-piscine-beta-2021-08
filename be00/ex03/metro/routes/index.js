var express = require("express");
var router = express.Router();
var fs = require("fs");
var _ = require("lodash");

const stationKorName = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
const stationEngName = /^[A-Z]{1}[a-zA-Z0-9\s]+$/;

const metroInfos = JSON.parse(
  fs.readFileSync(__dirname + "/../../seoul_metro_station.json")
).DATA;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/station/:name", function (req, res, next) {
  if (stationKorName.test(req.params.name)) {
    const seoulStation = _.find(metroInfos, (metroInfo) => {
      return metroInfo.station_nm === req.params.name;
    });
    if (!seoulStation) next(new Error("Invalid station name!"));
    res.status(200).json(seoulStation);
  } else if (stationEngName.test(req.params.name)) {
    const seoulStation = _.find(metroInfos, (metroInfo) => {
      return metroInfo.station_nm_eng === req.params.name;
    });
    if (!seoulStation) next(new Error("Invalid station name!"));
    res.status(200).json(seoulStation);
  } else {
    next(new Error("Invalid station name!"));
  }
});

router.get("/line", function (req, res, next) {
  if (req.query.line_num === undefined) {
    req.query.line_num = "01호선";
  }
  const lineNumInfos = _.filter(metroInfos, (metroInfo) => {
    return metroInfo.line_num === req.query.line_num;
  });
  if (lineNumInfos.length === 0) next(new Error("Invalid station line!"));
  else res.status(200).json(lineNumInfos);
});

router.post("/station/id", function (req, res, next) {
  const frCodeInfo = _.find(metroInfos, (metroInfo) => {
    return metroInfo.fr_code === req.body.fr_code;
  });
  if (!frCodeInfo) next(new Error("Invalid station fr_code!"));
  else res.status(200).json(frCodeInfo);
});

module.exports = router;
