import express from 'express';

import accountRouter from './account.routes';

const routes = express.Router();

routes.use('/account', accountRouter);

export default routes;
