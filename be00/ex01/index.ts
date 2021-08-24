import http from 'http';
import fs from 'fs';

const port = 4242;
const server = http.createServer((request, response) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      throw err;
    }
    response.end(data);
  });
  // response.writeHead(200, {
  //   'Content-Type': 'text/html',
  //   // 'Content-Length': output.length,
  // });
  // // response.end(output);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
