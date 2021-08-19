const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 4242;

function send500Message(err, res) {
	res.statusCode = 500;
	res.setHeader("Content-Type", "text/plain");
	res.end(String(err));
	console.log(err);
}

function onRequest(req, res) {
	if (req.method == 'GET' && req.url == '/') {
		fs.readFile('index.html', (err, data) => {
			try {
				if (err) throw err;
				else {
					res.statusCode = 200;
					res.setHeader("Content-Type", "text/html");
					res.end(data);
				}
			}
			catch (err) {
				send500Message(err, res);
			}
		})
	}
}

const server = http.createServer(onRequest);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})