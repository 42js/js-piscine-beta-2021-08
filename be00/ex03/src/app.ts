import express from 'express';
import 'dotenv/config';
// or
// import * as dotenv from 'dotenv';
import routes from './routes/routes';
import returnErrorMessage from './utils/returnErrorMessage';

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.use((request, response) => {
  response.json(
    returnErrorMessage(request.method, request.url, 400, 'Bad Request', ''),
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
