const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET_KEY;

function createJwt(req, res, next) {
    passport.authenticate("local", { session: false }, (err, user) => {
        if (err) return next(err);
        else if (!user)
            return res.status(400).json({
                msg: "signin false",
                reason: "잘못된 비밀번호/이메일 입니다.",
            });
        req.login(user, { session: false }, (err) => {
            if (err) next(err);
            const token = jwt.sign(
                {
                    username: user.username,
                    email: user.email,
                },
                secret,
                {
                    expiresIn: "10m",
                }
            );
            return res.status(200).json({
                msg: "singin success",
                token,
            });
        });
    })(req, res, next);
}

module.exports = { createJwt };
