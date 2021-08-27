var express = require("express");
var router = express.Router();
const { Users, sequelize } = require("../models");

async function validReq(req, res, next) {
    try {
        const { username, email } = req.body;
        if (!username || !email) {
            console.log("hi");
            res.status(400).json({ message: "Content is missing." });
        }
        const dupEmail = await Users.findOne({
            where: { email },
        });
        if (dupEmail)
            res.status(409).json({
                message: "User already exists.",
            });
        else next();
    } catch (error) {
        //next(error);
    }
    //중복체크
}

async function setUsers(req, res, next) {
    const { username, email, isCadet, carrerYears } = req.body;
    const rt = {};

    console.log(username);
    try {
        const user = await Users.create({
            username,
            email,
            isCadet,
            carrerYears,
        });
        rt.message = "User added successfully.";
        rt.data = user;
        return res.status(200).json(rt);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

router.post("/", validReq, setUsers);

//중복체크
//content없음 표시
module.exports = router;
