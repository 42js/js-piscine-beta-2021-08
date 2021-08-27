"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const issue_auth_1 = __importDefault(require("../auth/issue.auth"));
const verify_auth_1 = __importDefault(require("../auth/verify.auth"));
const passRouter = (0, express_1.Router)();
passRouter.get('', verify_auth_1.default);
passRouter.post('', (req, res, next) => {
    (0, issue_auth_1.default)(req, res, next);
    console.log(res.statusCode);
    res.send();
});
// passRouter.post('', (req, res) =>);
exports.default = passRouter;
