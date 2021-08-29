const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { User } = require('../database/models/user');
const validator = require('../middlewares/validator');

const router = express.Router();

router.use(express.json());

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //check - empty
        if (!email || !password) {
            return res.status(400).json({message: "email 또는 password가 유효하지 않습니다. "});
        }

        //check - email exists
        const user = await User.findOne({where: {email: email}});
        if (!user) {
            return res.status(400).json({message: "email 또는 password가 유효하지 않습니다. "});
        }

        //check - password
        const passwordHash = user.dataValues.password;
        bcrypt.compare(password, passwordHash, (err, result) => {
            if (err) {
                return res.status(500).json({message: "서버 에러로 비밀번호 대조에 실패하였습니다. "});
            }
            if (!result) return res.status(401).json({message: "비밀번호가 일치하지 않습니다. "});
        })

        //issue token
        //jwt.sign(payload, secretkey, options, callback);
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {expiresIn: '1m'});

        //update user token
        await User.update({token: token}, {where: {id: user.dataValues.id}});

        return res.status(200).json({message: "로그인 완료 ! ", token});

    } catch (err) {
        console.warn(err);

        return res.status(500).json({message: "서버 에러로 토큰 발급에 실패했습니다. "});
    }
});

router.post("/register", async (req, res) => {
    let { email, username, password } = req.body;

    //check - empty
    if (email === "" || username === "" || password === "") {
        return res.status(400).json({ message: "입력되지 않은 정보가 있습니다. " });
    }
    //check - validate
    if (!validator.email || !validator.username || !validator.password) {
        return res.status(400).json({message: "email, username 또는 password가 유효하지 않습니다. "});
    }
    //check - email, username duplicate
    const isEmailDup = await User.findOne({where: {email: email}});
    const isUsernameDup = await User.findOne({where: {username: username}});
    if (isEmailDup || isUsernameDup) {
        return res.status(409).json({message: "email 또는 username이 중복되었습니다. "});
    }

    //save to DB
    try {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            await User.create({
                username: username,
                email: email,
                password: hash
            });
            res.status(200).json({message: "회원가입 완료 ! "});
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "비밀번호 암호화에 실패했습니다. "});
    }
});

router.get("/logout", async (req, res) => {
    try {
        await User.update({token: null}, {where: {username: token.username}});
        return res.status(200).json({message: "로그아웃 완료 !"});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "서버 에러로 로그아웃에 실패하였습니다. "});
    }
});

module.exports = router;