var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var createError = require('http-errors');
require('dotenv').config()
/* GET home page. */
router.get('/', function(req, res, next) {

    const auth = jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET)
    res.json({
      "msg" : `🍪 ${auth.username}님 쿠키의 세상에 오신 걸 환영 합니다~! 🍪`
    });
});

router.post('/', (req, res, next) => {
  if (req.body.username == undefined)
    next(createError(404))
  else{
  const token = jwt.sign({
    username:req.body.username
  }, process.env.SECRET, {
    expiresIn:'1m'
  });
  res.append(
    "Set-Cookie",`jwt=${token} Expires=${new Date(Date.now() + 60).toISOString()};`
  );
  res.json({
    "msg" : "🍪 여권 발급 성공! 🍪",
  });
  }
});
module.exports = router;
