const express = require('express');
const router = express.Router();

const getBreedList = require('./getBreedList.js');
const getBreedPics = require('./getBreedPics')
router
  .get('/:name', (req, res) => {
    const name = req.params.name;
    getBreedPics(name)
      .then((pics) => {
        res.render('breed', {
          pics : pics
        });
        res.status(200);
      })
})
  .get('', (req, res) => {
    getBreedList()
    .then((list) => {
      res.render('breed_list', {
        breeds : list
      });
      res.status(200);
    })
});

module.exports = router;
