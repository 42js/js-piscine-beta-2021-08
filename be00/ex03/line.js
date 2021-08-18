const fs = require('fs');
const express = require('express');
const router = express.Router();


router.get('/line', (req, res) => {
  if (req.query['line_num'] === undefined) {
    console.log('No "line_num" query. respond 404 Not Found.');
    res.status(404).send({status : 404, message: 'Not Found'});
  }
})