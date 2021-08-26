const express = require("express");
const router = express.Router();
const { my_validator, my_validatorErr } = require("../my_validator");

router.post("/", my_validator, my_validatorErr);

module.exports = router;
