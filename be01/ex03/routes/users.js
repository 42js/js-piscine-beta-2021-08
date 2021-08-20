const express = require('express');
const db = require('../models/index');

const router = express.Router();

router
  .get('', async (req, res) => {
    try {
      const users = await db.User.findAll();
      res.status(200).send({ message: 'Users retrieved successfully.', data: users });
    } catch (err) {
      res.status(500).send({ message: 'Data is not available' });
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const users = await db.User.findAll({ where: { id: req.params.id } });
      if (users.length === 0) {
        res.status(409).send({ message: 'No users found' });
      } else {
        res.status(200).send({ message: 'User retrieved successfully.', data: users });
      }
    } catch (err) {
      res.status(500).send({ message: 'Data is not available' });
    }
  })
  .post('', (req, res) => {
    if (req.body.username === undefined || req.body.email === undefined) {
      res.status(400).send({ message: 'Content is missing' });
    } else {
      const date = new Date();
      db.User.create({
        username: req.body.username,
        email: req.body.email,
        isCadet: req.body.isCadet ? req.body.isCadet : null,
        careerYears: req.body.careerYear ? req.body.careerYears : null,
        created_at: date,
        updated_at: date,
      }).then((user) => {
        res.status(200).send({ message: 'User added successfully.', user });
      }).catch((err) => {
        if (err.name === 'SequelizeUniqueConstraintError') {
          res.status(409).send({ message: 'User already exists.' });
        } else {
          res.status(400).send({ message: String(err) });
        }
      });
    }
  });

module.exports = router;
