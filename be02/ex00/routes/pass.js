const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
  if (req.cookies.name === 'special_cookie' && req.cookies.value === '42') {
    res.status(200).send({ msg: '🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪' });
  } else {
    res.status(403).send({ msg: '🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪' });
  }
});

module.exports = router;
