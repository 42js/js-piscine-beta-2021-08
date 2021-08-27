import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const exp = 60;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  console.log(res.cookie);

  res.status(409).send({ error: 'username이 없습니다.' });
};

export default verifyToken;
