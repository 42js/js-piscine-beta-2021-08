var express = require("express");
var router = express.Router();
const { Users, sequelize } = require("../models");
/* GET users listing. */
router.post("/", async function (req, res, next) {
    console.log(sequelize.models.User);
    const { username, email, isCadet, carrerYears } = req.body;
    console.log(username);
    try {
        const user = await Users.create({
            username,
            email,
            isCadet,
            carrerYears,
        });
        //
        console.log(user);

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

//중복체크
//content없음 표시
module.exports = router;
