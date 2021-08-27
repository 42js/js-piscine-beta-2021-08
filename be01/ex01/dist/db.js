"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const db = { sequelize: {}, Sequelize, User: user_1.default };
db.sequelize = sequelize;
db.Sequelize = Sequelize;
