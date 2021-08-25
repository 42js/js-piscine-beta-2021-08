"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Metro = JSON.parse(fs_1.default.readFileSync('./seoul_metro_station.json').toString()).DATA;
exports.default = Metro;
