import http from 'http';
import fs from 'fs';

const port = 4242;
const refreshTemp = '{}';
const emptyString = 'empty\n';

const server = http.createServer((request, response) => {
  try {
    if (
      !(
        request.url === '/file' &&
        (request.method === 'GET' ||
          request.method === 'POST' ||
          request.method === 'DELETE')
      )
    )
      throw new Error();
    if (request.method === 'GET') {
      const getBodyTemp = {
        message: 'Content retrieved successfully.',
        data: {},
      };
      fs.readFile('./data.json', 'utf8', (err, filedata) => {
        if (err) {
          fs.writeFile('./data.json', refreshTemp, (error) => {
            if (error) {
              response.writeHead(500, {
                'Content-Type': 'text',
                Connection: 'close',
              });
              response.end();
            } else response.end(emptyString);
          });
        } else if (filedata.length === 0) {
          response.end(emptyString);
        } else {
          getBodyTemp.data = JSON.parse(filedata);
          console.log(getBodyTemp);
          response.writeHead(200, {
            'Content-Type': 'application/json',
          });
          response.write(JSON.stringify(getBodyTemp));
          response.end();
        }
      });
    } else if (request.method === 'POST') {
      const postBodyTemp = {
        message: 'Content added successfully.',
        edited_time: '',
        data: {},
      };
      let fileJson: JSON;
      let requestBody = '';
      request.on('data', (chunk) => {
        requestBody += chunk.toString();
      });
      request.on('end', () => {
        if (requestBody.length === 0) response.end(emptyString);
        else {
          fs.readFile('./data.json', 'utf8', (err, filedata) => {
            const currentTime = new Date();
            if (err) {
              response.writeHead(500, {
                'Content-Type': 'text',
                Connection: 'close',
              });
              response.end();
            } else {
              fileJson = JSON.parse(filedata);
              fileJson[currentTime.getTime()] = requestBody;
              fs.writeFile(
                './data.json',
                JSON.stringify(fileJson),
                (fileWriteError) => {
                  if (fileWriteError) {
                    response.writeHead(500, {
                      'Content-Type': 'text',
                      Connection: 'close',
                    });
                    response.end();
                  } else {
                    postBodyTemp.edited_time = currentTime.toISOString();
                    postBodyTemp.data = {
                      [currentTime.getTime()]: fileJson[currentTime.getTime()],
                    };
                    response.writeHead(200, {
                      'Content-Type': 'application/json',
                    });
                    response.write(JSON.stringify(postBodyTemp));
                    response.end();
                  }
                },
              );
            }
          });
        }
      });
    } else if (request.method === 'DELETE') {
      const deleteBody = {
        message: 'Content deleted successfully.',
      };
      fs.writeFile('./data.json', refreshTemp, (error) => {
        if (error) {
          response.writeHead(500, {
            'Content-Type': 'text',
            Connection: 'close',
          });
          response.end();
        } else {
          response.writeHead(200, {
            'Content-Type': 'application/json',
          });
          response.write(JSON.stringify(deleteBody));
          response.end();
        }
      });
    }
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
