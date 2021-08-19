const express = require('express');
const router = express.Router();

const getPug = require('./getPug.js');

router.get('', (req, res) => {
  getPug()
  .then((pug) => {
    res.render('index', {
      pugImg : pug
    });
    res.status(200);
  })
});

module.exports = router;
