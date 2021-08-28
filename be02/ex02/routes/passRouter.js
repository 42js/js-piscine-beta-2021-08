var express = require("express");
var router = express.Router();
const { passRes } = require("../controller/passController");
const { setCookieJWT, validJWT, validReq } = require("../middleware/validJWT");

router.get("/", validJWT, passRes);
router.post("/", validReq, setCookieJWT);

module.exports = router;
