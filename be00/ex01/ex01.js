const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 4242;

const server = http.createServer((req, res) => {
	try {
		const data = fs.readFileSync('./index.html');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(data);
	} catch {
		res.statusCode = 500;
		res.end('No such file or directory!');
		console.log('No such file or directory!');
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
