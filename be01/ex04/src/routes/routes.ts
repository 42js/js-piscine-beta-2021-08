import express from 'express';

import { Sequelize } from 'sequelize';
import sequelize from '../models/index';
import User from '../models/user.models';
import Question from '../models/question.models';
import Answer from '../models/answer.models';
import db from '../models/db';

import usersRouter from './user.routes';
import questionsRouter from './question.routes';
import answerRouter from './answer.routes';

const routes = express.Router();
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.Question = Question;
db.Answer = Answer;

routes.use('/users', usersRouter);
routes.use('/questions', questionsRouter);
routes.use('/answers', answerRouter);

export default routes;
