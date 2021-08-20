// 1. 서버 사용을 위해서 http 모듈을 http 변수에 담는다. (모듈과 변수의 이름은 달라도 된다.) 
const http = require('http'); 
const mysql = require('mysql');


var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'nodejsdb'
});

http.createServer( (req, res) => {

	conn.mysqld
    conn.query('select * from users ', (err, results, fields) => {
        if(err) throw err;
        console.log(results);
        res.end();
    });

}).listen(4242, () => {
    console.log('4242 : server start!');
});
