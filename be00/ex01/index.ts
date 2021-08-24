import express from 'express';

function runServer() {
  const app = express();
  app.listen(4242, () => {
    console.log('Server running at http://localhost:4242/');
  });
}
runServer();
