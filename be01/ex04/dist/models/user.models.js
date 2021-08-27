"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const User = index_1.default.define('users', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: sequelize_1.DataTypes.STRING(20), allowNull: false, unique: true },
    email: { type: sequelize_1.DataTypes.STRING(50), allowNull: false, unique: true },
    isCadet: { type: sequelize_1.DataTypes.BOOLEAN },
    careerYears: { type: sequelize_1.DataTypes.INTEGER },
    createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
}, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
});
exports.default = User;
