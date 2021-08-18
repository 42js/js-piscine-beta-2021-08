const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 4242;

const server = http.createServer((request, response) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      response.statusCode = 500;
      response.end(err);
      console.log(err);
    } else {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    }
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
