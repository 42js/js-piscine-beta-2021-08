"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const issueToken = (req, res, next) => {
    if (req.body.username === undefined ||
        req.body.username.length === 0 ||
        Object.keys(req.body).length === 0) {
        res.status(409);
        res.statusMessage = '409 Conflict; check your request body';
        return next();
    }
    jsonwebtoken_1.default.sign({ username: req.body.username }, String(process.env.SECRET_KEY), {
        expiresIn: 60,
    }, (err, token) => {
        if (err) {
            res.status(500);
            res.statusMessage = '500 Internal Server Error';
            return next();
        }
        res.status(200);
        res.cookie('jwt_cookie', token, {
            expires: new Date(Date.now() + 1000 * 60 * 2),
        });
        return next();
    });
};
exports.default = issueToken;
