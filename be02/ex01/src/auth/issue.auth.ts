import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { nextTick } from 'process';

dotenv.config();

const exp = 60;

const issueToken = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body.username);
  if (req.body.username) {
    jwt.sign(
      { username: req.body.username },
      String(process.env.SECRET_KEY),
      {
        expiresIn: 60,
      },
      (err, token) => {
        if (err) {
          res.status(500);
          res.json({ error: 'internal_server_error' });
        }
        res.status(200);
        res.cookie('jwt_cookie', token);
      },
    );
  } else {
    res.status(409);
    res.json({ error: 'hihi' });
  }
  return next();
};

export default issueToken;
