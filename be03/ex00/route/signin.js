const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'ex00'
});

router.post('', async (req, res) => {
    const profile = req.body;

    function compareProfile() {
        return new Promise(async (resolve, reject) => {
            await conn.connect();
            await conn.query(`SELECT username, password FROM user WHERE username='${profile.username}'`, (err, result) => {
                if (err) reject('사용자가 존재하지 않습니다.');
                compare = bcrypt.compareSync(profile.password, result[0].password);
                if (!compare) reject('비밀번호가 맞지 않습니다.');
            });
            await conn.end();
            await resolve();
        })
    }
    compareProfile()
        .then(() => {
            const token = jwt.sign({ username: profile.username }, process.env.KEY, { expiresIn: '1h' });
            res.cookie('username', token);
            console.log(token);
        })
        .catch((err) => {
            console.log(err);
        })
}).get('', (req, res) => {
    res.send(req.cookies.key);
})

module.exports = router;