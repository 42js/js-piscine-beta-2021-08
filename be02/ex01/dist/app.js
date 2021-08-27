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
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import { sequelize } from './models'; // 방금 만든 sequelize객체를 import해준다.(index.ts에 만들었으므로 폴더명만 입력하면 먼저 자동으로 index.ts를 찾아 그 안에 있는거 import)
// import session from 'express-session';
const routes_1 = __importDefault(require("./routes/routes"));
dotenv.config();
const PORT = parseInt(process.env.PORT, 10);
const HOST = String(process.env.HOST);
const app = (0, express_1.default)();
// app.use(
//   session({
//     // httpOnly: true, // 자바스크립트를 통해 세션 쿠키를 사용할 수 없도록 함
//     // secure: true, // https 환경에서만 session 정보를 주고받도록처리
//     secret: 'secret key', // 암호화하는 데 쓰일 키
//     resave: false, // 세션을 언제나 저장할지 설정함
//     saveUninitialized: true, // 세션이 저장되기 전 uninitialized 상태로 미리 만들어 저장
//     cookie: {
//       // 세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
//       httpOnly: true,
//       secure: true,
//     },
//   }),
// );
app.use(express_1.default.json());
// what is this
app.use(express_1.default.urlencoded({ extended: false }));
app.set('JWT_SECRET', process.env.SECRET_KEY);
app.use((0, cookie_parser_1.default)());
app.use(routes_1.default);
app.listen(PORT, HOST, () => {
    console.log(`Server Listening on http://${HOST}:${PORT}`);
});
