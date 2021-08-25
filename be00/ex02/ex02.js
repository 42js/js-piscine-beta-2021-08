const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 4242;

const server = http.createServer((req, res) => {
	try {
		if (req.url === '/file' && req.method === 'GET') {
			fs.readFile('./data.json', (err, data) => {
				if (err) {
					if (err.code === 'ENOENT') {
						fs.writeFile('data.json', '{}', err => {
							if (err) {
								console.log(err);
								return;
							}
						})
					}
					console.log(err);
					res.setHeader('Content-Type', 'text/plane');
					res.end('empty');
				}
				else {
					res.statusCode = 200;
					data = JSON.parse(data);
					if (Object.keys(data).length === 0) {
						res.setHeader('Context-Type', 'text/plain');
						res.end('empty');
					}
					else {
						const body = {
							'message': 'Content retrieved successfully.',
							data,
						}
						res.setHeader('Context-Type', 'application/json');
						res.end(JSON.stringify(body, null, 2));
					}
				}
			});
		}
		else if (req.url === '/file' && req.method === 'POST') {

		// 	let body = [];
		// 	req.on('data', (chunk) => {
		// 		body.push(chunk);
		// 	}).on('end', () => {
		// 		body = Buffer.concat(body).toString();
		// 		console.log(body);
		// 	})
		// }
		}
	} catch (err) {
		res.statusCode = 500;
		res.end(String(err));
		console.log(err);
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})
