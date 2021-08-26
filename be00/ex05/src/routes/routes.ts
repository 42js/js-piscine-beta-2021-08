import { Router } from 'express';
import breedsRouter from './breeds.routes';
import indexRouter from './index.routes';

const routes = Router();

routes.use('/', indexRouter);
routes.use('/breeds', breedsRouter);

export default routes;
