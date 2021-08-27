"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pass_routes_1 = __importDefault(require("./pass.routes"));
const routes = express_1.default.Router();
routes.use('/pass', pass_routes_1.default);
exports.default = routes;
