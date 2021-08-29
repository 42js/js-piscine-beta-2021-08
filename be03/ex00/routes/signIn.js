const express = require('express');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');
require('dotenv').config();

const router = express.Router();

router.use(express.json());

router.post("/signin", async (req, res) => {
    try {
        const username = req.body.username;

        //jwt.sign(payload, secretkey, options, callback);
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {expiresIn: '1m'});

        return res.status(200).json({message: "토큰이 정상적으로 발급 되었습니다. ", token});
    } catch (err) {
        console.warn(err);

        return res.status(500).json({message: "서버 에러로 토큰 발급에 실패했습니다. "});
    }
});

router.get("/test", verifyToken, (req, res) => {
    res.json(req.decoded);
});

module.exports = router;