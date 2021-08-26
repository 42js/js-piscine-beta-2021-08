import express from 'express';
import routes from './routes/routes';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.set('views', __dirname.replace('dist', 'views')); // set the directory where your template files exist
app.set('view engine', 'pug'); // set which template engine to use

app.use(express.json());
app.use(routes);

function handleInaccessable(req: express.Request, res: express.Response) {
  res.render('inaccessable', { time: Date(), _title: 'PUG' });
}

app.use(handleInaccessable);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
