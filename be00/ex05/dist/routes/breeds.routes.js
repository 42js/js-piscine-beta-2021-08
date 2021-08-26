"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const breedsRouter = express_1.Router();
breedsRouter.get('', (request, response) => {
    axios_1.default.get('https://dog.ceo/api/breeds/image/random/10').then((Response) => {
        console.log(Response.data.message[0]);
        response.render('breeds', {
            time: Date(),
            _title: 'PUG',
            _message: Response.data.message[0],
        });
    });
});
breedsRouter.get('/:name', (request, response) => {
    response.render('breeds_with_name', { time: Date(), _title: 'PUG' });
});
exports.default = breedsRouter;
