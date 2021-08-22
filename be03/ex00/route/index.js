const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

let user = undefined;

router.post('', async (req, res) => {
    try {
        await jwt.verify(req.cookies.username, process.env.KEY, (err, decoded) => {
            if (err) user = undefined;
            user = decoded.username;
        });
        res.send({ msg : '로그인 성공!'});
    }
    catch (err) {
        console.log(err);
    }
}).get('', (req, res) => {
    if (user != undefined) res.send({ msg : `${user}님 환영합니다.`})
    else res.send('로그인 또는 회원가입을 해주세요.');
})

module.exports = router;