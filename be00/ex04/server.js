const express = require("express");
const myValidator = require("./my_validator.js");
const app = express();
const port = 4242;

const NotFound = { 404: "Not Found" };

app
  .use(express.json())
  .use(myValidator)
  .post('/main', (req, res) => {
    if (req.body['result'] === true) {
      res.status(200).send(req.body);
    } else {
      res.status(400).send(req.body);
    }
})
  .use('/', (req, res, next) => {
  res.status(404).send(NotFound);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});