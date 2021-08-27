"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../models/db"));
const usersRouter = (0, express_1.Router)();
usersRouter.post('', (req, res) => {
    if (req.body.username === undefined ||
        req.body.email === undefined ||
        req.body.username.length === 0 ||
        req.body.email.length === 0) {
        res.status(400).send({ message: 'Content is missing' });
    }
    else {
        const date = new Date();
        console.log(req.body.isCadet);
        console.log(req.body.careerYears);
        db_1.default.User.create({
            username: req.body.username,
            email: req.body.email,
            isCadet: req.body.isCadet ? req.body.isCadet : null,
            careerYears: Number(req.body.careerYears) ? req.body.careerYears : null,
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
usersRouter.get('', async (req, res) => {
    try {
        const users = await db_1.default.User.findAll();
        res
            .status(200)
            .send({ message: 'Users retrieved successfully.', data: users });
    }
    catch (err) {
        res.status(500).send({ message: 'Data is not available' });
    }
});
exports.default = usersRouter;
