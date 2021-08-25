"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lodash_1 = __importDefault(require("lodash"));
const metro_1 = __importDefault(require("../metro"));
const returnErrorMessage_1 = __importDefault(require("../utils/returnErrorMessage"));
console.log(metro_1.default);
const stationRouter = express_1.Router();
const engRegExp = /^[a-zA-Z][a-zA-Z0-9 -]+$/;
stationRouter.get('/:name', (request, response) => {
    let output;
    if (request.params.name.match(engRegExp)) {
        console.log(request.params.name);
        output = lodash_1.default.find(metro_1.default, { station_nm_eng: request.params.name });
    }
    else
        output = lodash_1.default.find(metro_1.default, { station_nm: request.params.name });
    if (request.params.name.length === 0 ||
        request.params.name === undefined ||
        output === undefined ||
        output === '') {
        return response.json(JSON.parse(returnErrorMessage_1.default('GET', '/station', 404, 'Not Found', request.params.name)));
    }
    return response.json(output);
});
stationRouter.post('/id', (request, response) => {
    const frCode = request.body.fr_code;
    const output = lodash_1.default.find(metro_1.default, { fr_code: frCode });
    if (request.body.fr_code === null ||
        request.body.fr_code.length === 0 ||
        request.body.fr_code === undefined ||
        output === undefined) {
        return response.json(JSON.parse(returnErrorMessage_1.default('POST', '/station', 404, 'Not Found', request.body)));
    }
    return response.json(output);
});
exports.default = stationRouter;
