const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
require('dotenv').config();

const router = express.Router();
const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'ex00'
});


let user;

router.post('', (req, res) => {
    
    const profile = req.body;

    jwt.verify(req.cookies.username, process.env.KEY, (err, decoded) => {
        if (err) user = undefined;
        user = decoded.username;
    });

    
    function comparePassword() {
        return new Promise( async (resolve, reject) => {
            
            console.log(user)
    
            await conn.query(`SELECT username, password FROM user WHERE username="${profile.username}"`, (err, result) => {
                if (err) reject(err);
                console.log(result);
                const compare = bcrypt.compareSync(profile.password, result[0].password);
                if (!compare) reject({ msg : '비밀번호가 맞지 않습니다.' });
                else resolve();
            });
    
        })
    }
    comparePassword()
    .then(async () => {
        const hashPassword = bcrypt.hashSync(profile.new_password, 10);
        await conn.query(`UPDATE user SET password="${hashPassword}" WHERE username="${user}"`, (err, result) => {
            if (err) throw (err);
            res.send({ msg : '비밀번호 변경이 완료되었습니다.' });
        })
    })
    .catch((msg) => {
        res.send(msg);
    })
    
});

module.exports = router;