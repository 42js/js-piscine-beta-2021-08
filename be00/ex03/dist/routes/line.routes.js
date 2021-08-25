"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lodash_1 = __importDefault(require("lodash"));
const metro_1 = __importDefault(require("../metro"));
const returnErrorMessage_1 = __importDefault(require("../utils/returnErrorMessage"));
const lineRouter = express_1.Router();
lineRouter.get('', (request, response) => {
    const queryLineNum = request.query.line_num || '01호선';
    const output = lodash_1.default.filter(metro_1.default, { line_num: queryLineNum });
    if (request.query.line_num === undefined ||
        queryLineNum === undefined ||
        typeof queryLineNum === 'number' ||
        output === null ||
        output === undefined ||
        lodash_1.default.isEmpty(output)) {
        return response.json(JSON.parse(returnErrorMessage_1.default('GET', '/station', 404, 'Not Found', queryLineNum)));
    }
    return response.json(output);
});
exports.default = lineRouter;
