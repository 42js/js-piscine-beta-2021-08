"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
// export const sequelize = new Sequelize('typescript_test', 'root','Jaehyeon2!',{
//     host : 'localhost',
//     dialect : 'mysql',
// })
exports.sequelize = new sequelize_1.Sequelize(config_1.config.development.database, config_1.config.development.username, config_1.config.development.password, {
    host: config_1.config.development.host,
    dialect: 'mysql',
});
exports.default = exports.sequelize;
