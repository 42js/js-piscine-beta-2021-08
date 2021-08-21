const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { User } = require('../models/index');

const router = express.Router();

const badRequest = { msg: 'Bad Request' };
const exp = 120;

const emailValidator = (string) => /^(?=.{0,50})\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/.test(string);
const usernameValidator = (string) => /^(?=.{6,20}$)([a-z0-9]+)$/.test(string);
const passwordValidator = (string) => /^(?=.{8,20}$)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)/.test(string);

const issueToken = (username) => new Promise((resolve, reject) => {
  jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: exp },
    (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
});

const verifyToken = (jwtToken) => new Promise((resolve, reject) => {
  jwt.verify(jwtToken, process.env.SECRET_KEY,
    (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
});

router
  .post('/signup', (req, res) => {
    if (req.body.email && req.body.username && req.body.password
      && emailValidator(req.body.email)
      && usernameValidator(req.body.username)
      && passwordValidator(req.body.password)) {
      User.create({
        username: req.body.username,
        email: req.body.email,
        encoded_password: bcrypt.hashSync(req.body.password, 5),
      })
        .then(() => {
          res.status(200).send({ msg: 'Successfully signed up' });
        })
        .catch((err) => {
          if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(409).send({ msg: 'Conflict: The user is already registered' });
          } else {
            res.status(500).send({ msg: err.name });
          }
        });
    } else {
      res.status(400).send(badRequest);
    }
  })
  .post('/signin', async (req, res) => {
    if (req.body.username && req.body.password) {
      try {
        // find username
        const data = await User.findOne({ Where: { username: req.body.username } });
        if (data && data.dataValues.username === req.body.username) {
          // check password
          if (bcrypt.compareSync(req.body.password, data.dataValues.encoded_password)) {
            const token = await issueToken(req.body.username);
            await User.update({ last_jwt_token: token }, { where: { username: req.body.username }});
            res.status(200).cookie('jwt_token', token).send({ msg: 'successfully signed in' });
          } else {
            throw (new Error('Wrong username of password'));
          }
        } else {
          throw (new Error('Wrong username of password'));
        }
      } catch (err) {
        res.status(400).send({ msg: err.message });
      }
    } else {
      res.status(400).send(badRequest);
    }
  })
  .use(cookieParser())
  .get('/signout', async (req, res) => {
    try {
      const payload = await verifyToken(req.cookies.jwt_token);
      const data = await User.findOne({ Where: { username: payload.username } });
      if (data && data.dataValues.last_jwt_token === req.cookies.jwt_token) {
        await User.update({ last_jwt_token: null }, { where: { username: payload.username } });
        res.status(200).send({ msg: 'Successfully signed out.'})
      } else {
        res.status(401).send({ msg: 'Not signed in' });
      }
    } catch (err) {
      if (err.message === 'jwt expired') {
        res.status(401).send({ msg: 'Not signed in' });
      }
    }
    // if (req.cookies.jwt_cookie && ) {
    //   await User.update({ last_jwt_token: null }, { where: { username: req.body.username }});
    // } else {
    //   res.status(401).send({ msg: 'Not signed in' });
    // }
  });

module.exports = router;
