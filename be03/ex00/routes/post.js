var express = require('express');
var router = express.Router();
var {
  User,Posts
} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('express-jwt');
const createHttpError = require('http-errors');

router.post('/', jwt({secret: process.env.SALT, algorithms: ['HS256']}), (req,res,next) => {
    User.findOne({where: {username: req.user.username}}).then((results) => {
        if (results.id)
            Posts.create({
                title: req.body.title,
                content: req.body.post,
                fk_userId: results.id
            }).then((results) => {
                res.json({
                    msg : "done",
                    data : results
                });
            }).catch((err) => {
                res.status(400).json({msg:"Content is missing."})
            });
    });
});
router.get('/:count', jwt({secret: process.env.SALT, algorithms: ['HS256']}), (req,res,next) => {
    User.findOne({where: {username: req.user.username}}).then((results) => {
        if (results.id)
            Posts.findAll({
                limit: req.params.count ? req.params.count*1 : 0,
                order: [['createdAt','DESC']]
            }).then((results) => {
                res.json({
                    msg : "done",
                    data : results
                });
            }).catch((err) => {
                console.log(err)
                res.status(400).json({msg:"Content is missing."})
            });
    });
});
router.get('/:userid/:count', jwt({secret: process.env.SALT, algorithms: ['HS256']}), (req,res,next) => {
    User.findOne({where: {username: req.user.username}}).then((results) => {
        if (results.id)
            Posts.findAll({
                where: {fk_userId: req.params.userid},
                limit: req.params.count ? req.params.count*1 : 0,
                order: [['createdAt','DESC']]
            }).then((results) => {
                res.json({
                    msg : "done",
                    data : results
                });
            }).catch((err) => {
                console.log(err)
                res.status(400).json({msg:"Content is missing."})
            });
    });
});
router.patch('/:postid', jwt({secret: process.env.SALT, algorithms: ['HS256']}), (req,res,next) => {
    User.findOne({where: {username: req.user.username}}).then((results) => {
        if (results.id)
            Posts.update({
                title: req.body.title ? req.body.title : Posts.findOne({where :{id:req.params.postid}}).title,
                content: req.body.post ? req.body.post : Posts.findOne({where :{id:req.params.postid}}).content,
                },{    where: {id:req.params.postid}
            }).then((results) => {
                res.json({
                    msg : "done",
                });
            }).catch((err) => {
                console.log(err)
                res.status(400).json({msg:"Content is missing."})
            });
    });
});
router.delete('/:postid', jwt({secret: process.env.SALT, algorithms: ['HS256']}), (req,res,next) => {
    User.findOne({where: {username: req.user.username}}).then((results) => {
        if (results.id)
            Posts.destroy({
                where: {id:req.params.postid}
            }).then((results) => {
                res.json({
                    msg : "done",
                });
            }).catch((err) => {
                console.log(err)
                res.status(400).json({msg:"Content is missing."})
            });
    });
});
module.exports = router;