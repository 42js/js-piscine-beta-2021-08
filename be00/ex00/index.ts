import http from 'http';

const output = '안녕, Node.js!';
const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text',
    'Content-Length': output.length,
  });
  response.end(output);
});

server.listen(4242, () => {
  console.log('Server running at http://localhost:4242/');
});
