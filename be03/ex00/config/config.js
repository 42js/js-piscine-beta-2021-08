require('dotenv').config();

module.exports = {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE_NAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
};
