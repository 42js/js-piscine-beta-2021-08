const jwt = require('jsonwebtoken');
require('dotenv').config();

const authToken = (req, res, next) => {
  if (req.cookies && req.cookies.jwt_token) {
    new Promise((resolve, reject) => {
      jwt.verify(req.cookies.jwt_token, process.env.SECRET_KEY,
        (err, decoded) => {
          if (err) reject(err);
          else resolve(decoded);
        });
    })
      .then((payload) => {
        req.jwtPayload = payload;
        next();
      })
      .catch(() => {
        res.status(401).send({ msg: 'Not signed in' });
      });
  } else {
    res.status(401).send({ msg: 'Not signed in' });
  }
};

module.exports = authToken;
