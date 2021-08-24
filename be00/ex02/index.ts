import http from 'http';
import fs from 'fs';

const port = 4242;
const server = http.createServer((request, response) => {
  try {
    if (
      !(request.url === '/file' || request.url === '/file') ||
      !(
        request.method === 'GET' ||
        request.method === 'POST' ||
        request.method === 'DELETE'
      )
    )
      throw new Error();
    fs.readFile('./data.json', (err, data) => {
      if (err) {
        // fs.writeFile('./data.json', request.body.description, (err) => {
        //   if (err) {
        //     response.writeHead(500, {
        //       'Content-Type': 'text',
        //       Connection: 'close',
        //     });
        //     response.end('Internal Server Error');
        //   }
        // });
        response.end('empty');
      }
    });
  } catch (err) {
    response.writeHead(403, {
      'Content-Type': 'text',
      Connection: 'close',
    });
    response.end('Stay off ;)');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
