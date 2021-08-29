var express = require('express');
var router = express.Router();
var {
    User
} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    body,
    validationResult
} = require('express-validator');
const createHttpError = require('http-errors');
const gentoken = (res_username) => {
    return jwt.sign({
        username: res_username
    }, process.env.SALT, {
        expiresIn: '60m'
    });
}
/**
 * @swagger
 *  /signup:
 *    post:
 *      tags:
 *      - signup
 *      description: signup
 *      responses:
 *       200:
 *        description: 가입 성공
 */
router.use(async (req, res, next) => {
    if (req.body.username == undefined || req.body.password == undefined)
        next(createHttpError(400));
    else {
        pw = await bcrypt.hash(req.body.password, process.env.SALT);
        prePW = await bcrypt.hash(req.body.prePW ? req.body.prePW : "0", process.env.SALT);
        next()
    }
});

router.post('/', async function (req, res, next) {
    User.create({
        username: req.body.username,
        password: pw,
        email: req.body.email,
        isCadet: req.body.isCadet ? req.body.isCadet : null,
        careerYears: req.body.careerYears ? req.body.careerYears * 1 : 0,
    }).then((results) => {
        console.log(results.id);
        const token = gentoken(results.id);
        res.append(
            "Set-Cookie", `jwt=${token} Expires=${new Date(Date.now() + 1000*60*60).toISOString()};`
        );
        res.json({
            data: token
        });
    }).catch((err) => {
        if (err.errors !== undefined && err.errors[0].type == 'unique violation') {
            res.status(409);
            res.json({
                "message": "User already exists"
            })
        } else {
            res.status(400);
            res.json({
                "message": "Content is missing."
            });
        }
    });
});
/**
 * @swagger
 *  /signup:
 *    patch:
 *      tags:
 *      - signup
 *      description: signup
 *      responses:
 *       200:
 *        description: 비밀번호 변경 성공
 */
router.patch('/', body('password').isLength({
    min: 8
}), async function (req, res, next) {
    if (!validationResult(req).isEmpty())
        next(createHttpError(599));
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then((results) => {
        if (results.password == prePW)
            User.update({
                password: pw
            }, {
                where: {
                    username: req.body.username
                }
            }).then((results) => {
                console.log('🤬', 'PW Changed', results);
                const token = gentoken(req.body.username)
                res.append(
                    "Set-Cookie", `jwt=${token} Expires=${new Date(Date.now() + 1000*60*60).toISOString()};`
                );
                res.json({
                    msg: "done"
                });
            }).catch((err) => {
                console.log(err.message);
            })
        else
            res.status(500).json({
                msg: "fail"
            });
    })
});
module.exports = router;