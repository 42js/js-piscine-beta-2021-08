"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const exp = 60;
const verifyToken = (req, res, next) => {
    if (!req.cookies.jwt_cookie ||
        !req.cookies === undefined ||
        Object.keys(req.cookies).length === 0) {
        res.status(409);
        res.statusMessage = 'Conflict';
        return next();
    }
    console.log(req.cookies.jwt_cookie);
    try {
        const decoded = jsonwebtoken_1.default.verify(req.cookies.jwt_cookie, process.env.SECRET_KEY);
        req.body.username = decoded.username;
        return next();
    }
    catch {
        res.status(500);
        res.statusMessage = 'Internal Server Error';
        console.log('jwt error');
        return next();
    }
};
exports.default = verifyToken;
