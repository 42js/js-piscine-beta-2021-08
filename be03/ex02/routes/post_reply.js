const express = require('express');
const cookieParser = require('cookie-parser');
const authJwt = require('./auth/authJwt');
require('dotenv').config();
const { User, Post, Reply } = require('../models/index');

const router = express.Router();

const badRequest = { msg: 'Bad Request' };
const wrongApproach = { msg: 'Wrong approach' };
const conflict = { msg: 'Not a valid reply post id' };

const isNonNegativeInt = (number) => {
  if (!number || Number.isNaN(number) || !Number.isInteger(parseFloat(number))) {
    return false;
  }
  if (parseInt(number, 10) < 0) {
    return false;
  }
  return true;
};

const userIdToUserName = async (userId) => {
  const users = await User.findAll({ where: { id: userId } });
  return users[users.length - 1].dataValues.username;
};

const postExist = async (postId) => {
  const posts = await Post.findAll({ where: { id: postId } });
  return (posts.length !== 0)
};

router
  .post('', async (req, res) => {
    try {
      if (req.query.id && req.body.content) {
        if (!postExist(req.query.id)) {
          res.status(409).send(conflict);
        } else {
          const username = await userIdToUserName(req.jwtPayload.id);
          Reply.create({
            username,
            content: req.body.content,
            userId: req.jwtPayload.id,
            postId: req.query.id,
          });
          res.status(201).send({ msg: 'Successfuly replied'});
        }
      }
    } catch (err) {

    }
  });