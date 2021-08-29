const passport = require("passport");
const { validationResult } = require("express-validator");

function authJwt(req, res, next) {
    passport.authenticate("jwt", { session: false }, function (err, user) {
        if (err) {
            return res.status(500).json({ msg: "token 인증 실패", err });
        }
        if (!user) {
            return res.status(400).json({ msg: "유효하지 않은 토큰입니다." });
        }
        req.user = user;
        next();
    })(req, res, next);
}

async function validPost(req, res, next) {
    const err = validationResult(req);
    console.log(err.errors.length);
    if (err.errors.length !== 0) {
        console.log(err);
        res.status(400).json(err);
    } else next();
}

module.exports = { authJwt, validPost };
