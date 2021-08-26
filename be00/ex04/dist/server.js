"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const my_validator_1 = __importDefault(require("./my_validator"));
const returnErrorMessage_1 = __importDefault(require("./returnErrorMessage"));
const app = express_1.default();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(my_validator_1.default);
app.post('/main', (request, response) => {
    if (request.body.result === true) {
        response.status(200).send(request.body);
    }
    else {
        response.status(400).send(request.body);
    }
});
app.use('/', (req, res, next) => {
    res
        .status(404)
        .send(returnErrorMessage_1.default(req.method, req.url, 404, 'Not found', req.url));
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
