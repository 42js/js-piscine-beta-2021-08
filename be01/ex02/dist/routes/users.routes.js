"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../models/db"));
const router = express_1.default.Router();
router.post('', (req, res) => {
    if (req.body.username === undefined ||
        req.body.email === undefined ||
        req.body.username.length === 0 ||
        req.body.email.length === 0) {
        res.status(400).send({ message: 'Content is missing' });
    }
    else {
        const date = new Date();
        db_1.default.User.create({
            username: req.body.username,
            email: req.body.email,
            isCadet: req.body.isCadet ? req.body.isCadet : null,
            careerYears: req.body.careerYear ? req.body.careerYears : null,
            created_at: date,
            updated_at: date,
        })
            .then((user) => {
            res.status(200).send({ message: 'User added successfully.', user });
        })
            .catch((err) => {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(409).send({ message: 'User already exists.' });
            }
            else {
                res.status(400).send({ message: String(err) });
            }
        });
    }
});
exports.default = router;
