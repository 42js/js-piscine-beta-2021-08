const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const exp = 60;
// const users = {};

const issueFailed = function issueFailed() {
  const ret = {
    msg: '🍪 여권 발급 실패! 🍪',
    reason: [],
  };
  for (let i = 0; i < arguments.length; i += 1) {
    ret.reason[i] = arguments[i];
  }
  return ret;
};

const verifyFailed = function verifyFailed() {
  const ret = {
    msg: '🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪',
    reason: [],
  };
  for (let i = 0; i < arguments.length; i += 1) {
    ret.reason[i] = arguments[i];
  }
  return ret;
};

const issueToken = (req, res, next) => {
  if (req.body.username) {
    jwt.sign({ username: req.body.username }, process.env.COOKIE_SECRET_KEY, { expiresIn: exp },
      (err, token) => {
        if (err) {
          res.status(500).send(issueFailed(String(err)));
        } else {
          res.cookie('jwt_cookie', token);
          next();
        }
      });
  } else {
    res.status(409).send(issueFailed('username이 없습니다.'));
  }
};

const verifyToken = (req, res) => {
  if (req.cookies.jwt_cookie) {
    const promise = new Promise((resolve, reject) => {
      jwt.verify(req.cookies.jwt_cookie, process.env.COOKIE_SECRET_KEY,
        (err, decoded) => {
          if (err) reject(err);
          else resolve(decoded);
        });
    });
    promise
      .then((payload) => {
        res.status(200).send({
          msg: `🍪 ${payload.username}님 쿠키의 세상에 오신 걸 환영 합니다~! 🍪`,
        });
      })
      .catch((err) => {
        if (err) res.status(409).send(verifyFailed(String(err)));
      });
  } else {
    res.status(409).send(verifyFailed('jwt-cookie가 없습니다.'));
  }
};

module.exports.issueToken = issueToken;
module.exports.verifyToken = verifyToken;
