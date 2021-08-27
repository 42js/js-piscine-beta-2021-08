"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const issue_auth_1 = __importDefault(require("../auth/issue.auth"));
const verify_auth_1 = __importDefault(require("../auth/verify.auth"));
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const passRouter = (0, express_1.Router)();
passRouter.get('', verify_auth_1.default);
passRouter.post('', issue_auth_1.default, sendResponse_1.default);
exports.default = passRouter;
