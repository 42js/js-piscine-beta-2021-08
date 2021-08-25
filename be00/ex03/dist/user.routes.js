"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRouter = express_1.Router();
usersRouter.get('/', (request, response) => {
    return response.json('OK');
});
exports.default = usersRouter;
