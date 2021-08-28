var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    const special = req.cookies.special;
    console.log(req.cookies);
    if (special !== "42")
        res.status(401).json({
            msg: "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪",
        });
    else {
        res.status(200).json({
            msg: "🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪",
        });
    }
});

module.exports = router;
