"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function runServer() {
    const app = express_1.default();
    app.listen(5000, () => {
        console.log('start server');
    });
}
runServer();
