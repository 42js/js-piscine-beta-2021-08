"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
exports.sequelize = new sequelize_1.Sequelize(config_1.default.development.database, config_1.default.development.username, config_1.default.development.password, {
    host: config_1.default.development.host,
    dialect: 'mysql',
    // for emoji
    dialectOptions: {
        charset: 'utf8mb4',
    },
});
exports.sequelize.query('SET NAMES utf8mb4');
exports.default = exports.sequelize;
