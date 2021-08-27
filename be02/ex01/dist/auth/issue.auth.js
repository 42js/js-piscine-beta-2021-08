"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const exp = 60;
const issueToken = (req, res, next) => {
    console.log(req.body.username);
    if (req.body.username) {
        jsonwebtoken_1.default.sign({ username: req.body.username }, String(process.env.SECRET_KEY), {
            expiresIn: 60,
        }, (err, token) => {
            if (err) {
                res.status(500);
                res.json({ error: 'internal_server_error' });
            }
            res.status(200);
            res.cookie('jwt_cookie', token);
        });
    }
    else {
        res.status(409);
        res.json({ error: 'hihi' });
    }
    return next();
};
exports.default = issueToken;
