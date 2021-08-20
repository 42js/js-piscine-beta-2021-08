const sequelize = require("sequelize")

const db = new sequelize("db_master","db_user","password", {
        dialect: "mysql"
});

db.sync({});

module.exports = db;