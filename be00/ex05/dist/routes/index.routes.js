"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexRouter = express_1.Router();
indexRouter.get('', (request, response) => {
    response.render('index', { time: Date(), _title: 'PUG' });
});
exports.default = indexRouter;
