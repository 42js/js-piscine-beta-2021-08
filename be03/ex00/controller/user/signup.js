const { Users, sequelize } = require("../../models");
const bcrypt = require("bcrypt");

async function emailDupCheck(req, res, next) {
    const { email } = req.body;
    console.log("email checking...");
    const userDbEmail = await Users.findOne({ where: { email } });
    console.log(userDbEmail);
    if (userDbEmail) res.status(400).json({ msg: "중복된 이메일입니다." });
    else next();
}

async function insertUser(req, res, next) {
    //로컬 패스폴트
    const { username, password, email } = req.body;
    console.log(req.body);
    try {
        const user = await Users.create({
            username,
            password: bcrypt.hashSync(password, 10),
            email,
        });
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.log("error", error);
        if (error.name === "SequelizeValidationError")
            res.status(400).json({ msg: "잘못된 입력입니다.", err: error });
        res.status(500).json(error);
    }
}

module.exports = { insertUser, emailDupCheck };
