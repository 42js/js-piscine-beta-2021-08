import express from 'express';
import 'dotenv/config';

import myValidator from './my_validator';
import returnErrorMessage from './returnErrorMessage';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(myValidator);

app.post('/main', (request, response) => {
  if (request.body.result === true) {
    response.status(200).send(request.body);
  } else {
    response.status(400).send(request.body);
  }
});

app.use('/', (req, res, next) => {
  res
    .status(404)
    .send(returnErrorMessage(req.method, req.url, 404, 'Not found', req.url));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
