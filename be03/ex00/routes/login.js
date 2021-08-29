var express = require('express');
var router = express.Router();
var {
  User
} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
const gentoken = (res_username) => {
  return jwt.sign({
    username: res_username
  }, process.env.SALT, {
    expiresIn: '60m'
  });
}
/**
 * @swagger
 *  /login:
 *    post:
 *      tags:
 *      - login
 *      description: login
 *      responses:
 *       200:
 *        description: 로그인 성공
 *       500:
 *        description: 로그인 실패
 */
/* GET users listing. */
router.use(async (req, res, next) => {
  console.log(req.body.password)
  if (req.body.username == undefined || req.body.password == undefined)
    next(createHttpError());
  else{
    pw = await bcrypt.hash(req.body.password, process.env.SALT);
    next()
  }
})
router.post('/', function (req, res, next) {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then((results) => {
    if (results.password == pw) {
      console.log('🤮', 'loggedIN');
      const token = gentoken(req.body.username)
      res.append(
        "Set-Cookie", `jwt=${token} Expires=${new Date(Date.now() + 1000*60*60).toISOString()};`
      );
      res.json({
        msg: "done"
      });
    } else
      res.status(500).json({
        msg: "fail"
      });
  })
});

module.exports = router;