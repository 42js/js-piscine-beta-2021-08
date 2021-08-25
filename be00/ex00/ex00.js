const http = require('http');

const hostname = 'localhost';
const port = 4242;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain; charset=utf-8');
	res.end('안녕, Node.js!');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
