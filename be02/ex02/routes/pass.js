const express = require('express');
const passport = require('passport');
require('../config/passport');
const issueToken = require('./auth/issue');

const router = express.Router();

router
  .use(express.json())
  .post('', issueToken)
  .post('', (req, res) => {
    res.status(200).send({ msg: '🍪 여권 발급 성공! 🍪' });
  })
  .use(passport.initialize())
  .get('', (req, res) => {
    if (req.username) {
      res.status(200).send({ msg: `🍪 ${req.username}님 쿠키의 세상에 오신 걸 환영 합니다~! 🍪` });
    } else {
      res.status(403).send({ msg: '🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪' });
    }
  });

module.exports = router;
