const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 4242;

const isEmptyJSON = (data) => {
  if (!data)
    return true;
  const parsed = JSON.parse(data);
  return parsed && Object.keys(parsed).length === 0
}

const server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    fs.readFile('./data.json', (err, data) => {
      try {
        if (err) {
          if (err.code == 'ENOENT') {
            fs.writeFile('data.json', '{\n}\n', (err) => {
              if (err) throw err;
            });
            response.setHeader('Content-Type', 'text/plain');
            response.end('empty');
          }
        } else {
          JSON.parse(data);
          response.statusCode = 200;
          if (Object.keys(data).length === 0) {
            response.setHeader('Content-Type', 'text/plain');
            response.end('empty');
          } else {
            response.setHeader('Content-Type', 'application/json');
            response.end(data);
          }
        }
      } catch (err) {
        response.statusCode = 500;
        response.end(String(err));
        console.log(err);
      }
    })
  } else if (request.method === 'POST') {

  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
