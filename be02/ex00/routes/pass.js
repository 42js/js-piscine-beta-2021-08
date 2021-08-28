var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.cookies['special_cookie'] == 42)
      res.json({"msg" : "🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪"})
    else
      res.json({"msg" : "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪"})
});

module.exports = router;
