var express = require("express");
var router = express.Router();
const { check } = require("express-validator");

const { authJwt, validPost } = require("../middleware/auth");
const {
    passwordChange,
    signoutRes,
    insertUser,
    emailDupCheck,
    createJwt,
} = require("../controller/user/userController");

router.get("/", authJwt, function (req, res, next) {
    res.json({ msg: `hello ${req.user.username}` });
});
router.get("/signout", authJwt, signoutRes);
router.post(
    "/passwordchange",
    [
        check("newPassword", "비밀번호는 8글자 이상, 대소문자 포함, 숫자 포함.")
            .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "i")
            .notEmpty(),
    ],
    validPost,
    authJwt,
    passwordChange
);
router.post(
    "/signup",
    [
        check("password", "비밀번호는 8글자 이상, 대소문자 포함, 숫자 포함.")
            .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "i")
            .notEmpty(),
        check("email", "유효하지 않은 이메일").isEmail().notEmpty(),
        check("username", "유효하지 않은 username")
            .notEmpty()
            .matches(/^(?=.*\d)(?=.*[a-z]).{8,}$/),
    ],
    validPost,
    emailDupCheck,
    insertUser
);
router.post("/signin", createJwt);
module.exports = router;
