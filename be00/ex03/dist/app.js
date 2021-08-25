"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
// or
// import * as dotenv from 'dotenv';
const routes_1 = __importDefault(require("./routes/routes"));
const returnErrorMessage_1 = __importDefault(require("./utils/returnErrorMessage"));
const app = express_1.default();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((request, response) => {
    response.json(returnErrorMessage_1.default(request.method, request.url, 400, 'Bad Request', ''));
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
