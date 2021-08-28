import express from 'express';

// import db model
import { Sequelize } from 'sequelize';
import sequelize from '../models/index';
import User from '../models/user';
import db from '../models/db';
// import db model

// import router
import accountRouter from './account.routes';
// import router
const routes = express.Router();

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;

routes.use('/account', accountRouter);

export default routes;
