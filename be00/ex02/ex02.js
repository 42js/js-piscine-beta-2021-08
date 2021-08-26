const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 4242;

const error500 = (res, err) => {
  res.statusCode = 500;
  res.end(String(err));
}

const server = http.createServer((req, res) => {
	try {
		if (req.url === '/file' && req.method === 'GET') {
			fs.readFile('./data.json', (err, data) => {
				if (err) {
					if (err.code === 'ENOENT') {
						fs.writeFile('data.json', '{}', err => {
							if (err) {
								error500(res, err);
								return;
							}
						})
					}
					error500(res, err);
					res.setHeader('Content-Type', 'text/plane');
					res.end('empty');
				}
				else {
					try {
						res.statusCode = 200;
						data = JSON.parse(data);
						if (Object.keys(data).length === 0) {
							res.setHeader('Context-Type', 'text/plain');
							res.end('empty');
						}
						else {
							const body = {
								"message": "Content retrieved successfully.",
								data,
							}
							res.setHeader('Context-Type', 'application/json');
							res.end(JSON.stringify(body, null, 2));
						}
					}
					catch (err) {
						error500(res, err);
						return;
					}
				}
			});
		}
		else if (req.url === '/file' && req.method === 'POST') {
			const { headers, method, url } = req;
      let body = [];
			req.on('error', err => {
				error500(res, err);
				return;
			}).on('data', chunk => {
				body.push(chunk);
			}).on('end', () => {
				body = Buffer.concat(body).toString();

				res.on('error', err => {
					error500(res, err);
					return;
				});
				fs.readFile('./data.json', (err, data) => {
					if (err) {
						if (err.code === 'ENOENT') {
							fs.writeFile('data.json', '{}', err => {
								if (err) {
									error500(res, err);
									return;
								}
							})
							error500(res, err);
							return;
						}
						error500(res, err);
						res.setHeader('Content-Type', 'text/plane');
						res.end('file doesn\'t exist');
					}
					const parsedOldData = JSON.parse(data);
					const time = new Date();
					parsedOldData[time.getTime()] = body;
					try {
						const write = fs.writeFileSync('./data.json', JSON.stringify(parsedOldData, null, 2));
					}
					catch (err) {
						error500(res, err);
						return;
					}
					const value = {};
					value[time.getTime()] = body;
					const result = {
						"message": "Content added successfully.",
						"edited_time": time.toISOString(),
						"data": value
					};
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.end(JSON.stringify(result, null, 2));
				})
			})
		}
		else if (req.url === '/file' && req.method === 'DELETE') {
			fs.writeFile('data.json', '{}', { flag: 'w+' }, err => {
				if (err) {
					error500(res, err);
					return;
				}
				else {
					const result = {
						"message": "Content deleted successfully.",
					};
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.end(JSON.stringify(result, null, 2));
				}
			})
		}
	} catch (err) {
		error500(res, err);
		return;
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})
