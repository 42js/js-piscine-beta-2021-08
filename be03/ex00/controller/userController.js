const db = require('../models');
const User = db.User;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const bcrypt = require('bcrypt');

require('dotenv').config();
const env = process.env;

exports.signin = async (req, res) => {
    try {
        const what = passport.authenticate('local', (err, user, info) => {
            if (err || !user) {
                console.log(`Error: ${err}`);
                console.log(`User : ${user}`);
                res
                    .status(400)
                    .json({message: info.message});
                return;
            }
            req.login(user, {
                session: false
            }, (err) => {
                if (err) {
                    res.send(err);
                    return;
                }
            })
            const token = jwt.sign({
                email: user.email,
                username: user.username
            }, env.SECRET_KEY, {expiresIn: '1d'});
            res.json({token}); // 여기서 쿠키 설정?
        })(req, res);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.auth = async (req, res) => {
	try {
		await passport.authenticate('jwt', {session: false});
		res.json({result: true});
	} catch (err) {
		console.error(err);
		next(err);
	}
}

exports.signup = async (req, res) => {
    const reqbody = req.body;
	console.log(reqbody);
    if (!reqbody.username || !reqbody.email || !reqbody.password) 
        return res
            .status(400)
            .send({"message": "Content is missing."});
    const hashPassword = await bcrypt.hash(reqbody.password, saltRounds);
    const user = {
        username: reqbody.username,
        email: reqbody.email,
        password: hashPassword,
        isCadet: reqbody.isCadet
            ? reqbody.isCadet
            : null,
        careerYears: reqbody.careerYears
            ? reqbody.careerYears
            : null
    };
    try {
        await User.create(user);
        const body = {
            "message": "User added successfully.",
        };
        res
            .status(200)
            .send(body);
    } catch (err) {
        if (err.name === "SequelizeUniqueConstraintError") 
            res
                .status(400)
                .send({"message": "User already exists."});
        console.error(err.stack);
    }
}

exports.findAll = async (req, res) => {
    try {
        const data = await User.findAll();
        const body = {
            "message": "Users retrieved successfully.",
            data
        };
        res
            .status(200)
            .send(body);
    } catch (err) {
        console.error(err.stack);
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await User.findByPk(id);
        if (data === null) 
            res
                .status(400)
                .send({"message": "No users found."});
        const body = {
            "message": "User retrieved successfully.",
            data
        };
        res
            .status(200)
            .send(body);
    } catch (err) {
        console.log(err.stack);
    }
}