import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('', (request, response) => {
  response.render('index', { time: Date(), _title: 'PUG' });
});

export default indexRouter;
