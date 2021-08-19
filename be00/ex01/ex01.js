import http, { createServer } from 'http';
import fs from 'fs';

const options = {
  hostname: 'localhost',
  port: '4242',
};

http.get('http://localhost:4242', options, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error(`Request Failed.\nStatus Code: ${statusCode}`);
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error(`Invalid content-type.\nExpected text/html but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => console.log(`Server is running on ${res.url}`));
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('./ex01.html', (err, data) => {
    if (err) throw err;
    res.write(data);
  });
});

server.listen(4242);
