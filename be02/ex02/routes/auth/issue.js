const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const exp = 60;

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

module.exports = issueToken;
