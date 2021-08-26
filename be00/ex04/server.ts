import express from 'express';
import 'dotenv/config';

import myValidator from './my_validator';
import returnErrorMessage from './returnErrorMessage';

const app = express();
const port = process.env.PORT;

// app.

app
  .use(express.json())
  .use(myValidator)
  .post('/main', (request, response) => {
    if (request.body.result === true) {
      response.status(200).send(request.body);
    } else {
      response.status(400).send(request.body);
    }
  })
  .use('/', (request, response, next) => {
    response
      .status(404)
      .send(
        returnErrorMessage(
          request.method,
          request.url,
          404,
          'Not found',
          request.url,
        ),
      );
  })
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
