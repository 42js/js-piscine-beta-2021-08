const signin = require("./signin");
const signup = require("./signup");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
function signoutRes(req, res, next) {
    res.status(200).json({ msg: "signout success" });
}

function passwordChange(req, res, next) {
    const { newPassword } = req.body;
    req.user.update({
        password: bcrypt.hashSync(newPassword, 10),
    });
    res.status(200).json({ msg: "password changed" });
}

module.exports = { signoutRes, passwordChange, ...signin, ...signup };
