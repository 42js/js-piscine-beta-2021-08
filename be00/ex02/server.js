const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 4242;

const errorCode500 = (response, err) => {
  response.statusCode = 500;
  response.end(String(err));
  console.log(err);
}

const server = http.createServer((request, response) => {
  try {
    if (request.url === '/file' && request.method === 'GET') {
      fs.readFile('./data.json', (err, data) => {
        if (err) {
          if (err.code == 'ENOENT') {
            fs.writeFile('data.json', '{\n}\n', (err) => {
              if (err) throw err;
            });
            response.setHeader('Content-Type', 'text/plain');
            response.end('empty');
          }
        } else {
          try {
            data = JSON.parse(data);
            response.statusCode = 200;
            if (Object.keys(data).length === 0) {
              response.setHeader('Content-Type', 'text/plain');
              response.end('empty');
            } else {
              response.setHeader('Content-Type', 'application/json');
              const body = {
                "message" : "Content retrieved successfully.",
                data
              }
              response.end(JSON.stringify(body));
            }
          } catch (err) {
            errorCode500(response, err);
          }
        }
      });
    } else if (request.url === '/file' && request.method === 'POST') {
      const { headers, method, url } = request;
      let body = [];
      const isErr = false
      request.on('error', (err) => {
        errorCode500(response, err);
        return;
      }).on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        fs.open('./data.json', 'a+', (err) => {
          if (err) throw err;
          fs.readFile('./data.json', (err, data) => {
            if (err) throw err;
            try {
              const date = new Date();
              const parsed = JSON.parse(data);
              strDate = '' + date.getTime();

              parsed[strDate] = body;
              fs.writeFile('./data.json', JSON.stringify(parsed, null, 2), () => {},);
              const resData = {};
              resData[strDate] = body;
              const resBody = {
                "message" : "Content added successfully.",
                "edited_time" : date,
                "data" : resData
              };
              response.statusCode = 200;
              response.setHeader('Content-Type', 'application/json');
              response.end(JSON.stringify(resBody, null, 2));
            } catch (err) {
              errorCode500(response, err);
            }
          })
        });
      });
    } else if (request.url === '/file' && request.method === 'DELETE') {
      fs.open('./data.json', 'r', (err) => {
        if (err) {
          errorCode500(response, err);
        } else {
          fs.open('./data.json', 'w', (err) => {
            if (err) {
              errorCode500(response, err);
            } else {
              fs.writeFile('./data.json', '{\n}\n', (err) => {
                if (err) {
                  errorCode500(response, err);
                } else {
                  const resBody = {
                    "message": "Content deleted successfully."
                  }
                  response.statusCode == 200;
                  response.setHeader('Content-Type', 'application/json');
                  response.end(JSON.stringify(resBody, null, 2));
                }
              })
            }
          })
        }
      })
    }
  } catch (err) {
  response.statusCode = 500;
  response.end(String(err));
  console.log(err);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
