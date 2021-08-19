const http = require('http');
const fs = require('fs');

function send500Message(response) {
	respone.writeHead(500, {"Content-Type":"text/html"});
	respone.write();
}

const server = http.createServer();
server.on('request', function(request, response) {
	fs.readFile('./data.json', function(err, data) {
			if (err)
			{
			}
			else if (request.method == 'GET' && request.url == '/file')
			{
				// has not file
			
				response.writeHead(200, {"Content-Type": "text/html"});
				response.write(data);
				response.end();
			}
			else if (request.method == 'POST' && request.url == '/file')
			{
				response.writeHead(200, {"Content-Type": "text/plain"});
				response.write("Hello");
				response.end();
			}
			else if (request.method == 'DELETE' && request.url == '/file')
			{
			}

			}
}
