const express = require('express');
const cookieParser = require('cookie-parser');
const authJwt = require('./auth/authJwt');
require('dotenv').config();
const { User, Post } = require('../models/index');

const router = express.Router();
const replyRouter = require('./post_reply');

// const badRequest = { msg: 'Bad Request' };
const wrongApproach = { msg: 'Wrong approach' };

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

router
  .use(cookieParser())
  .use(authJwt)
  // writing
  .post('/write', (req, res) => {
    if (req.body.title) {
      userIdToUserName(req.jwtPayload.id)
        .then((username) => {
          if (req.body.title) {
            Post.create({
              username,
              title: req.body.title,
              content: req.body.content,
              userId: req.jwtPayload.id,
            });
            res.status(201).send({ msg: 'Successfully posted' });
          }
        }).catch((err) => {
          res.status(500).send({ msg: err.message });
        });
    } else {
      res.status(400).send({ msg: 'Title required' });
    }
  })
  // searching
  .get('', (req, res) => {
    const { user, number } = req.query;
    if (!isNonNegativeInt(number)) {
      res.status(400).send(wrongApproach);
    }
    const condition = { limit: parseInt(number, 10), order: [['createdAt', 'DESC']] };
    if (user) {
      condition.where = { username: user };
    }
    Post.findAll(condition)
      .then((posts) => {
        res.status(200).send({
          msg: 'Successfully inquired',
          posts,
        });
      }).catch((err) => {
        res.status(500).send({ msg: err.message });
      });
  })
  // deleting
  .delete('', (req, res) => {
    const { id } = req.query;
    if (!isNonNegativeInt(id)) {
      res.status(400).send(wrongApproach);
    }
    Post.findAll({ where: { id } })
      .then((posts) => {
        if (posts.length === 0) {
          res.status(409).send({ msg: 'Not a valid id' });
        } else if (posts[0].dataValues.userId !== req.jwtPayload.id) {
          res.status(403).send({ msg: 'Not a valid user' });
        } else {
          posts[0].destroy();
          res.status(200).send({ msg: 'Post is successfully deleted' });
        }
      }).catch((err) => {
        res.status(500).send({ msg: err.message });
      });
  })
  .post('', (req, res) => {
    const { id } = req.query;
    const { title, content } = req.body;
    if (!isNonNegativeInt(id)) {
      res.status(400).send(wrongApproach);
    }
    Post.findAll({ where: { id } })
      .then((posts) => {
        if (posts.length === 0) {
          res.status(409).send({ msg: 'Not a valid id' });
        } else if (posts[0].dataValues.userId !== req.jwtPayload.id) {
          res.status(403).send({ msg: 'Not a valid user' });
        } else {
          const post = posts[0];
          if (title) post.title = title;
          if (content) post.content = content;
          post.save();
          res.status(200).send({ msg: 'Post is successfully edited' });
        }
      }).catch((err) => {
        res.status(500).send({ msg: err.message });
      });
  })
  .use('*', replyRouter);

module.exports = router;
