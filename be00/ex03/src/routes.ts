import { Router } from 'express';
import usersRouter from './user.routes';

const routes = Router();

routes.use('/users', usersRouter);

export default routes;
