import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../models/user';

const postLogin = (req: Request, res: Response, next: NextFunction): void => { };
const getLoout = (req: Request, res: Response, next: NextFunction): void => { };
const postSignup = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => { };

const postChangePassword = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => { };

export { postLogin, getLoout, postSignup, postChangePassword };
