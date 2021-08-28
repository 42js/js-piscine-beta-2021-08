import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const issueToken = (req: Request, res: Response, next: NextFunction): void => {
  if (
    req.body.username === undefined ||
    req.body.username.length === 0 ||
    Object.keys(req.body).length === 0
  ) {
    res.status(409);
    res.statusMessage = 'Conflict; check your request body';
    return next();
  }

  jwt.sign(
    { username: req.body.username },
    String(process.env.SECRET_KEY),
    {
      expiresIn: 60,
    },
    (err, token) => {
      if (err) {
        res.status(500);
        res.statusMessage = 'Internal Server Error';
        return next();
      }
      res.status(200);
      res.cookie('jwt_cookie', token, {
        expires: new Date(Date.now() + 1000 * 60 * 2),
      });
      return next();
    },
  );
};

export default issueToken;
