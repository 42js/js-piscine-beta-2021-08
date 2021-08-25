"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const line_routes_1 = __importDefault(require("./line.routes"));
const station_routes_1 = __importDefault(require("./station.routes"));
const routes = express_1.Router();
routes.use('/line', line_routes_1.default);
routes.use('/station', station_routes_1.default);
exports.default = routes;
