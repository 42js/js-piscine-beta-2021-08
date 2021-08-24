import express from 'express';

function runServer() {
  const app = express();
  app.listen(5000, () => {
    console.log('start server');
  });
}
runServer();
