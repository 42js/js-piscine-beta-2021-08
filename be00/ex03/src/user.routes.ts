import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return response.json('OK');
});

export default usersRouter;
