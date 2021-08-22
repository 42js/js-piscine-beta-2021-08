const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'ex00'
});

connection.connect();


 
connection.query("DESC user", function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log(result);
});
 
connection.end();