import * as dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
// import { sequelize } from './models'; // 방금 만든 sequelize객체를 import해준다.(index.ts에 만들었으므로 폴더명만 입력하면 먼저 자동으로 index.ts를 찾아 그 안에 있는거 import)
// import session from 'express-session';
import routes from './routes/routes';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST = String(process.env.HOST);
const app = express();

app.use(express.json());
// what is this
app.use(express.urlencoded({ extended: false }));
app.set('JWT_SECRET', process.env.SECRET_KEY);

app.use(cookieParser());

app.use(routes);

app.listen(PORT, HOST, () => {
  console.log(`Server Listening on http://${HOST}:${PORT}`);
});
