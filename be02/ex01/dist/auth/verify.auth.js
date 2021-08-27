"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const exp = 60;
const verifyToken = (req, res, next) => {
    console.log(res.cookie);
    res.status(409).send({ error: 'username이 없습니다.' });
};
exports.default = verifyToken;
