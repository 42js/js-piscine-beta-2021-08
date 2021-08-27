import * as dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
// import { sequelize } from './models'; // 방금 만든 sequelize객체를 import해준다.(index.ts에 만들었으므로 폴더명만 입력하면 먼저 자동으로 index.ts를 찾아 그 안에 있는거 import)
// import session from 'express-session';
import routes from './routes/routes';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST = String(process.env.HOST);
const app = express();

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

app.use(express.json());
// what is this
app.use(express.urlencoded({ extended: false }));
app.set('JWT_SECRET', process.env.SECRET_KEY);

app.use(cookieParser());

app.use(routes);

app.listen(PORT, HOST, () => {
  console.log(`Server Listening on http://${HOST}:${PORT}`);
});
