import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { decode } from 'punycode';

dotenv.config();

const exp = 60;

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  if (
    !req.cookies.jwt_cookie ||
    !req.cookies === undefined ||
    Object.keys(req.cookies).length === 0
  ) {
    res.status(409);
    res.statusMessage = 'Conflict';
    return next();
  }
  console.log(req.cookies.jwt_cookie);
  try {
    const decoded = jwt.verify(
      req.cookies.jwt_cookie,
      process.env.SECRET_KEY as string,
    );
    req.body.username = (<any>decoded).username;
    return next();
  } catch {
    res.status(500);
    res.statusMessage = 'Internal Server Error';
    console.log('jwt error');
    return next();
  }
};

export default verifyToken;
