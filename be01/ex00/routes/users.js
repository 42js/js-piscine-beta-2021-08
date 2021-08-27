var express = require('express');
var router = express.Router();
var { sequelize, User } = require('../models')

//sequelize.sync().then(() => {
const db = 
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then((results) => {
    //console.log(results);
    res.json({
      message: "Users retrieved successfully.",
      data: results})
  });
  //res.send('respond with a resource');
});
router.get('/:id', function(req, res, next) {
  User.findOne({where: {id: req.params.id*1}}).then((results) => {
    //console.log(results);
    if (!results)
      res.json({
        message: "No users fount"
      })
    else
      res.json({
      message: "Users retrieved successfully.",
      data: results})
  }).catch(err => {
    console.log(err)
  });
  //res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  const now = new Date();
  console.log(req.body.careerYears);
  User.create({
    username: req.body.username,
    email: req.body.email,
    isCadet:req.body.isCadet,
    careerYears: req.body.careerYears*1,
    createAt: now.toISOString(),
    updateAt: now.toISOString(),
  }).then((results) => {
    console.log(results);
    res.json({
    message: "User added successfully.",
    data: results
    });
  }).catch((err) => {
    console.log("asdfasdfsadfasdfasdfds",err);
    if (err.errors !== undefined && err.errors[0].type == 'unique violation'){
      res.status(409);
      res.json({"message":"User already exists"})
    }else {
      res.status(400);
      res.json({"message":"Content is missing."});
    }
  });
});
module.exports = router;
