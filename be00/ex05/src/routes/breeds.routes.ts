import axios from 'axios';
import { Router } from 'express';

const breedsRouter = Router();

breedsRouter.get('', (request, response) => {
  axios.get('https://dog.ceo/api/breeds/image/random/10').then((Response) => {
    console.log(Response.data.message[0]);
    response.render('breeds', {
      time: Date(),
      _title: 'PUG',
      _message: Response.data.message[0],
    });
  });
});

breedsRouter.get('/:name', (request, response) => {
  response.render('breeds_with_name', { time: Date(), _title: 'PUG' });
});

export default breedsRouter;
