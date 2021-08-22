const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bytes = require('bytes');
require('dotenv').config();

const router = express.Router();
const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'ex00'
});

function checkProfile(profile) {
    
    const username = /^.*(?=.{6})(?=.*[a-z0-9]).*$/;
    const password = /^.*(?=.{8})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/;
    const email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
    if (profile.username == undefined)
    throw ('사용자 이름을 입력해 주세요.');
    if (profile.password == undefined)
    throw ('비밀번호를 입력해 주세요.');
    if (profile.email == undefined)
    throw ('이메일을 입력해 주세요.');
    
    if (!username.test(profile.username))
    throw ('사용자 이름은 영어와 숫자로 구성되며 6글자 이상으로 입력해 주세요.');
    if (!password.test(profile.password))
    throw ('비밀번호는 대문자, 소문자, 숫자 각각 1개 이상 총 8글자 이상으로 입력해주세요.');
    if (!email.test(profile.email))
    throw ('올바른 이메일을 입력해 주세요.');
}

router.post('', async (req, res) => {
    const profile = req.body;
    
    try {
        checkProfile(profile);
        
        const hashPassword = bcrypt.hashSync(profile.password, 10);
        const compare = bcrypt.compareSync('Root1004', hashPassword);
        console.log('hash', hashPassword);
        console.log(compare);
        
        const db = `
        INSERT INTO user
        (username, password, email)
        VALUES('${profile.username}', '${hashPassword}', '${profile.email}')
        `;

        conn.connect();
        // await conn.query(db, function (err, result) {
        //     if (err) throw (err)
        //     console.log(result);
        // });

        await conn.query("SELECT username, password, email FROM user", (err, result) => {
            if (err) console.log(err);
            console.log('db', result[0].password)
            console.log(result);
        })

        conn.end();
        await console.log('사용자 정보가 정상적으로 저장 되었습니다.')
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;