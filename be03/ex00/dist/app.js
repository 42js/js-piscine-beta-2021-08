"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config();
const PORT = parseInt(process.env.PORT, 10);
const HOST = String(process.env.HOST);
const app = (0, express_1.default)();
app.use(express_1.default.json());
// what is this
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use(routes_1.default);
app.listen(PORT, HOST, () => {
    console.log(`Server Listening on http://${HOST}:${PORT}`);
});
