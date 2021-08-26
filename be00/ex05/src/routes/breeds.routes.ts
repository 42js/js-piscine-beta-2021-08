import { Router } from 'express';

const breedsRouter = Router();

breedsRouter.get('', (request, response) => {
  response.render('breeds', { time: Date(), _title: 'PUG' });
});

breedsRouter.get('/:name', (request, response) => {
  response.render('breeds', { time: Date(), _title: 'PUG' });
});

export default breedsRouter;
