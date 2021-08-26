"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const breeds_routes_1 = __importDefault(require("./breeds.routes"));
const index_routes_1 = __importDefault(require("./index.routes"));
const routes = express_1.Router();
routes.use('/', index_routes_1.default);
routes.use('/breeds', breeds_routes_1.default);
exports.default = routes;
