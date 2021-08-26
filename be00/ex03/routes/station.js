var express = require("express");
var router = express.Router();

//regex: 대소문자로 시작하며 대소문자 숫자 공백을 허용하는 문자열
// URL: /station/Seoul%20Station 처리
function parseParams(req, res, next) {
    const stationName = req.params.name;
    let rt = req.readMetroFileJson;
    const re = /([A-Z])\w/gi;

    console.log("paranms", stationName);
    try {
        if (re.test(stationName)) findStationEn(rt, res, stationName);
        else findStationKR(rt, res, stationName);
    } catch (error) {
        next(error);
    }
}

function findStationKR(rt, res, stationName) {
    console.log("KR");
    rt = rt.filter((item) => item.station_nm === stationName);
    if (rt.length > 0) res.status(200).json(rt);
    else throw { code: "NOMATCH", message: "Can't find it" };
}

function findStationEn(rt, res, stationName) {
    rt = rt.filter((item) => {
        return item.station_nm_eng === stationName;
    });
    if (rt.length > 0) {
        res.status(200).json(rt);
    } else {
        throw { code: "NOMATCH", message: "Can't find it" };
    }
}

function findStationErr(err, req, res, next) {
    if (err.code === "NOMATCH") res.status(400).json(err.message);
}

function findStationId(req, res, next) {
    const stationId = req.body.fr_code;
    const rt = req.readMetroFileJson.filter(
        (item) => item.fr_code === stationId
    );
    if (rt.length > 0) res.status(200).json(rt);
    else next({ code: "NOMATCH", message: "Can't find it" });
}
router.post("/id", findStationId, findStationErr);
router.get("/:name", parseParams, findStationErr);

module.exports = router;
