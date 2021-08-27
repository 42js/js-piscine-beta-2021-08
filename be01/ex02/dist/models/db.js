"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const user_1 = __importDefault(require("./user"));
const db = { sequelize: index_1.default, Sequelize: sequelize_1.Sequelize, User: user_1.default };
exports.default = db;
