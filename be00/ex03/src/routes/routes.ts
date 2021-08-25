import { Router } from 'express';
import lineRouter from './line.routes';
import stationRouter from './station.routes';

const routes = Router();

routes.use('/line', lineRouter);
routes.use('/station', stationRouter);

export default routes;
