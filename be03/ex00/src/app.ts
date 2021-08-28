import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import routes from './routes/routes';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST = String(process.env.HOST);
const app = express();

app.use(express.json());
// what is this
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(routes);

app.listen(PORT, HOST, () => {
  console.log(`Server Listening on http://${HOST}:${PORT}`);
});
