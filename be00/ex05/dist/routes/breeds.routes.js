"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const breedsRouter = express_1.Router();
breedsRouter.get('', (request, response) => {
    response.render('breeds', { time: Date(), _title: 'PUG' });
});
breedsRouter.get('/:name', (request, response) => {
    response.render('breeds', { time: Date(), _title: 'PUG' });
});
exports.default = breedsRouter;
