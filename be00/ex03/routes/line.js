var express = require("express");
var router = express.Router();

function findLine(req, res, next) {
    const lineNum = req.query.line_num;
    console.log(lineNum);
    const rt = req.readMetroFileJson.filter((item) => {
        return item.line_num === lineNum;
    });
    if (rt.length === 0) next({ code: "NOMATCH", message: "결과가 없습니다." });
    res.status(200).json(rt);
}

function findLineErr(err, req, res, next) {
    console.log("err");
    console.log(err.code);
    if (err.code === "NOMATCH") {
        res.status(400).json(err.message);
        res.end();
    } else next(err);
}
router.get("/", findLine, findLineErr);

module.exports = router;
