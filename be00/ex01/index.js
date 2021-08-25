const http = require('http');
const fs = require('fs');
const PORT = 4242;
http.createServer((req, res) => {
	req
	.on('error', (err) => {
		console.error(err);
	})
	.on('data', (data) => {
		console.log(data);
	})
	.on('end', () => {
		res.on('error', (err) => {
			console.error(err);
		});
		res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
		fs.readFile(__dirname + '/main.html', (err, data) => {
			if (err) {
				return console.error(err);
			}
			res.end(data);
		})
	});
}).listen(PORT);