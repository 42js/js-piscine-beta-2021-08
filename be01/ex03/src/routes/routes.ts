import express from 'express';

import { Sequelize } from 'sequelize';
import sequelize from '../models/index';
import User from '../models/user';
import db from '../models/db';

import usersRouter from './users.routes';

const routes = express.Router();

db.sequelize = sequelize;

db.Sequelize = Sequelize;

db.User = User;

routes.use('/users', usersRouter);

export default routes;
