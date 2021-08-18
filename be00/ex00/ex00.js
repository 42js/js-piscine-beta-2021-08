const http = require('http');

const hostname = 'localhost';
const port = 4242;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text');
  response.end('안녕, Node.js!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
