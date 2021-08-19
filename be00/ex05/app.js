const express = require('express');
const app = express();

const homeRouter = require('./home');
const breedListRouter = require('./breedList');

app
  .set("view engine", "pug")
  .set("views", "templates");

app
  .use('/images', express.static('public'))
  .use('/', homeRouter)
  .use('/breeds', breedListRouter)
  .use((req, res, next) => {
    res.status(404).send('Not Found');
});
app.listen(80, () => {
  console.log('Server is running...');
});
