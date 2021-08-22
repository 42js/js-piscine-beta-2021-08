const express = require('express');
const router = express.Router();

router.post('', (req, res) => {
    res.clearCookie('username').send('Sucess delete cookie');
    console.log(req.cookies)
})

module.exports = router;