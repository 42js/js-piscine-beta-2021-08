const jwt = require("jsonwebtoken");
const { sequelize, User } = require("./../models");
const verify = require("./verify.js");
const bcrypt = require("bcrypt");

const expiredToken = [];

const config = () => {
  sequelize.sync();
};

const userByToken = (token) => {
  var ret;
  if (expiredToken.indexOf(token) !== -1) {
    return null;
  }
  try {
    ret = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (e) {
    console.log(e);
    ret = null;
  }
  return ret;
};

const jwtGuard = (request, response, next) => {
  if (request.cookies.jwt_cookie && userByToken(request.cookies.jwt_cookie)) {
    next();
    return;
  }
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.status(200).send(verify.errorJson(10, "invalid request"));
};

const singIn = async (request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  if (!request.body.username || !request.body.password) {
    response.status(200).send(verify.errorJson(1, "field is undefined"));
    return;
  }
  var user = await User.findOne({ where: { username: request.body.username } });
  if (
    !user ||
    !bcrypt.compareSync(request.body.password, user.dataValues.password)
  ) {
    response
      .status(200)
      .send(verify.errorJson(6, "incorrect name or password"));
    return;
  }
  var token = jwt.sign(
    {
      username: user.dataValues.username,
    },
    process.env.JWT_SECRET_KEY,
    {
      subject: "userToken",
      expiresIn: "60m",
    }
  );
  response.cookie("jwt_cookie", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60),
  });
  response.status(200).send(verify.errorJson(101, "successfully loged in"));
};

const singOut = (request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  if (!request.cookies.jwt_cookie) {
    response.status(200).send(verify.errorJson(7, "token is undefined"));
    return;
  }
  try {
    var token = jwt.verify(
      request.cookies.jwt_cookie,
      process.env.JWT_SECRET_KEY
    );
    expiredToken.push(request.cookies.jwt_cookie);
    response.clearCookie("jwt_cookie");
    response.status(200).send(verify.errorJson(102, "successfully loged out"));
  } catch (e) {
    console.log(e);
    response.status(200).send(verify.errorJson(8, "invalid jwt"));
  }
};

const singUp = async (request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  if (!request.body.username || !request.body.email || !request.body.password) {
    response.status(200).send(verify.errorJson(1, "field is undefined"));
    return;
  }
  if (
    !verify.username(request.body.username) ||
    !verify.password(request.body.password) ||
    !verify.email(request.body.email)
  ) {
    response.status(200).send(verify.errorJson(2, "field is invalid"));
    return;
  }
  if (await User.findOne({ where: { username: request.body.username } })) {
    response.status(200).send(verify.errorJson(3, "username already exist"));
    return;
  }
  if (await User.findOne({ where: { email: request.body.email } })) {
    response.status(200).send(verify.errorJson(4, "email already exist"));
    return;
  }
  try {
    const passwordHash = bcrypt.hashSync(request.body.password, 6);
    await User.create({
      username: request.body.username,
      email: request.body.email,
      password: passwordHash,
    });
    response.status(200).send(verify.errorJson(100, "successfully signed up"));
  } catch (e) {
    console.log(e);
    response.status(200).send(verify.errorJson(5, "query error occured"));
  }
};

const pwChange = async (request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  if (!request.body.username || !request.body.password || !request.body.newpw) {
    response.status(200).send(verify.errorJson(1, "field is undefined"));
    return;
  }
  var user = await User.findOne({ where: { username: request.body.username } });
  if (
    !user ||
    !bcrypt.compareSync(request.body.password, user.dataValues.password)
  ) {
    response
      .status(200)
      .send(verify.errorJson(6, "incorrect name or password"));
    return;
  }
  if (!verify.password(request.body.newpw)) {
    response.status(200).send(verify.errorJson(2, "field is invalid"));
    return;
  }
  try {
    const passwordHash = bcrypt.hashSync(request.body.newpw, 6);
    await User.update(
      { password: passwordHash },
      { where: { username: request.body.username } }
    );
    response.status(200).send(verify.errorJson(103, "successfully changed"));
  } catch (e) {
    console.log(e);
    response.status(200).send(verify.errorJson(5, "query error occured"));
  }
};

module.exports = {
  config,
  singIn,
  singOut,
  singUp,
  pwChange,
  userByToken,
  jwtGuard,
};
