"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const sequelize_1 = require("sequelize");
const express_1 = __importDefault(require("express"));
const models_1 = require("./models"); // 방금 만든 sequelize객체를 import해준다.(index.ts에 만들었으므로 폴더명만 입력하면 먼저 자동으로 index.ts를 찾아 그 안에 있는거 import)
const user_1 = __importDefault(require("./models/user"));
dotenv.config();
const PORT = parseInt(process.env.PORT, 10);
const HOST = String(process.env.HOST);
const app = express_1.default();
const db = { sequelize: models_1.sequelize, Sequelize: sequelize_1.Sequelize, User: user_1.default };
db.sequelize = models_1.sequelize;
db.Sequelize = sequelize_1.Sequelize;
db.User = user_1.default;
models_1.sequelize.sync();
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log(`Request Occur! ${req.method}, ${req.url}`);
    next();
});
app.listen(PORT, HOST, () => {
    console.log(`Server Listening on http://${HOST}:${PORT}`);
});
