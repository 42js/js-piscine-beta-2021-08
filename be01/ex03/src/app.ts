import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import express, { Request, Response, NextFunction } from 'express';
import { sequelize } from './models'; // 방금 만든 sequelize객체를 import해준다.(index.ts에 만들었으므로 폴더명만 입력하면 먼저 자동으로 index.ts를 찾아 그 안에 있는거 import)
import User from './models/user';
import db from './models/db';
import router from './routes/users.routes';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST = String(process.env.HOST);
const app = express();

db.sequelize = sequelize;

db.Sequelize = Sequelize;

db.User = User;

sequelize.sync();

app.use(express.json());
// app.use((req: Request, res: Response, next: NextFunction) => {
//   console.log(`Request Occur! ${req.method}, ${req.url}`);
//   next();
// });

app.use('/users', router);

app.listen(PORT, HOST, () => {
  console.log(`Server Listening on http://${HOST}:${PORT}`);
});
