const express = require('express');
const router = express.Router();
const auth = require('./auth');

router
    .use(express.json())
    .post('', auth.validPost)
    .post('', (req, res) => {
        res.status(200).send({ msg: '🍪 여권 발급 성공! 🍪' })
    })
    .get('', auth.validGET);

module.exports = router;