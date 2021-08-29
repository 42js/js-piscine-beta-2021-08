require("dotenv").config();
env = process.env;

module.exports = {
    development: {
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        host: env.DB_HOST,
        dialect: "mysql",
    },
    test: {
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        host: env.DB_HOST,
        dialect: "mysql",
    },
    production: {
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        host: env.DB_HOST,
        dialect: "mysql",
    },
};
