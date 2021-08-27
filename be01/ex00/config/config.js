require("dotenv").config();
const env = process.env;

const development = {
    username: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    host: "127.0.0.1",
    dialect: "mysql", //사용하는 db
    port: env.MYSQL_PORT,
};
const test = {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
};
const production = {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
};

module.exports = { development, test, production };
