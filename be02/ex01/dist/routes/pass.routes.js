"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const issue_auth_1 = __importDefault(require("../auth/issue.auth"));
const verify_auth_1 = __importDefault(require("../auth/verify.auth"));
const res_utils_1 = require("../utils/res.utils");
const passRouter = (0, express_1.Router)();
passRouter.get('', verify_auth_1.default, res_utils_1.sendVerifyResponse);
passRouter.post('', issue_auth_1.default, res_utils_1.sendIssueResponse);
exports.default = passRouter;
