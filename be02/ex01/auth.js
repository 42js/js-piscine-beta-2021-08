const jwt = require('jsonwebtoken');
const path = require('path');
const parser = require('cookie-parser');
require('dotenv').config({ path: path.join(__dirname, '.env')});

const postFailed = () => {
    const ret = {
        msg : "🍪 여권 발급 실패! 🍪",
        reason : []
    }
    for (var i = 0; i < arguments.length; i++) ret.reason[i] = arguments[i];
    return ret;
};

const validPost = (req, res, next) => {
    if (req.body.username) {
        jwt.sign({ username: req.body.username }, process.env.KEY, { expiresIn: 60 }, (err, token) => {
              if (err) res.status(500).send(postFailed(String(err)));
                else {
                res.cookie('jwt_cookie', token);
                next();
              }
            });
    }
    else res.status(500).send(postFailed(String('username을 적어주세요')));
}

const getFailed = () => {
    const ret = {
        msg : "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪",
        reason : []
    }
    for (var i = 0; i < arguments.length; i++) ret.reason[i] = arguments[i];
    return ret;
}

const validGET = (req, res) => {
    console.log(req.cookie)
    if (req.cookies.jwt_cookie) {
        const promise = new Promise((resolve, reject) => {
            jwt.verify(req.cookies.jwt_cookie, process.env.KEY, (err, decoded) => {
                if (err) reject(err);
                else resolve(decoded);
            })
        })
        promise
            .then((payload) => {
                res.status(200).send({
                    msg : `🍪 ${payload.username}님 쿠키의 세상에 오신 걸 환영 합니다~! 🍪`
                });
            })
            .catch((e) => {
                if (e) res.status(500).send(getFailed(String(e)));
            })
    }
    else {
        res.status(500).send('jwt_cookie가 없습니다.');
    }
}

module.exports.validPost = validPost;
module.exports.validGET = validGET;