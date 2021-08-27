"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../models/db"));
const answerRouter = (0, express_1.Router)();
answerRouter.post('', (req, res) => {
    console.log(req.body);
    if (req.body.userId === undefined ||
        req.body.questionId === undefined ||
        req.body.content === undefined ||
        req.body.userId.length === 0 ||
        req.body.questionId.length === 0 ||
        req.body.content.length === 0 ||
        Object.keys(req.body).length === 0) {
        res.status(400).send({ message: 'Content is missing' });
    }
    else {
        const date = new Date();
        db_1.default.Answer.create({
            userId: req.body.userId,
            questionId: req.body.questionId,
            content: req.body.content,
            created_at: date,
            updated_at: date,
        })
            .then((answer) => {
            res.status(200).send({ message: 'Answer added successfully.', answer });
        })
            .catch((err) => {
            res.status(400).send({ message: String(err) });
        });
    }
});
exports.default = answerRouter;
