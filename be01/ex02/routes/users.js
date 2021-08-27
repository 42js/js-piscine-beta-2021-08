var express = require("express");
var router = express.Router();
const { sequlize, User } = require("../models");
/* GET users listing. */
router.post("/", async function (req, res, next) {
    const { username, email, isCardet, careerYears } = req.body;
    console.log(username);
    try {
        const user = await User.create({
            username,
            email,
            isCardet,
            careerYears,
        });

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

module.exports = router;
