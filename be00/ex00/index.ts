import http from 'http';

const port = 4242;
const server = http.createServer((request, response) => {
  const output = '안녕, Node.js!';
  response.writeHead(200, {
    'Content-Type': 'text',
    'Content-Length': output.length,
  });
  response.end(output);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
