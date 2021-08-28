import express from 'express';

import passRouter from './pass.routes';

const routes = express.Router();

routes.use('/pass', passRouter);

export default routes;
