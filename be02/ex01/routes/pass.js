const express = require('express');
const auth = require('./auth/auth');

const router = express.Router();

router
  .use(express.json())
  .post('', auth.issueToken)
  .post('', (req, res) => {
    res.status(200).send({ msg: '🍪 여권 발급 성공! 🍪' });
  })
  .get('', auth.verifyToken);

module.exports = router;
