"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const Answer = index_1.default.define('answers', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    content: { type: sequelize_1.DataTypes.TEXT },
    createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
}, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
});
exports.default = Answer;
