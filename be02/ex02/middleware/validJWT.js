require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET_KEY; //secret키 뭘로?

function validJWT(req, res, next) {
    const { token } = req.cookies;
    if (token) {
        try {
            jwt.verify(token, secret);
            next();
        } catch (error) {
            next(error);
        }
    } else {
        res.status(401).json({
            msg: "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪",
            reason: ["token 검증 실패"],
        });
    }
}

function validReq(req, res, next) {
    const { username } = req.body;
    if (username) next();
    else {
        res.status(400).json({
            msg: "🍪 여권 발급 실패! 🍪",
            reason: ["username이 없어요"],
        });
    }
}

function setCookieJWT(req, res, next) {
    try {
        const token = jwt.sign(
            {
                username: req.body.username,
                exp: 120,
            },
            secret,
            {
                expiresIn: 120,
            }
        );
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 120000,
        });
        res.status(200).json({ msg: "🍪 여권 발급 성공! 🍪" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "🍪 여권 발급 실패! 🍪",
            reason: ["jwt make error"],
        });
    }
}

module.exports = { validReq, validJWT, setCookieJWT };
