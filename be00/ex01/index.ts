import http from 'http';
import fs from 'fs';

const port = 4242;

const server = http.createServer((request, response) => {
  try {
    if (!(request.url === '/' || request.url === '/index.html'))
      throw new Error();
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        // console.log(err);
        response.writeHead(500, {
          'Content-Type': 'text',
          Connection: 'close',
        });
        response.end();
      } else response.end(data);
    });
  } catch (err) {
    response.writeHead(404, {
      'Content-Type': 'text',
      Connection: 'close',
    });
    response.end('file not found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
