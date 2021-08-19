const http = require('http');
const server = http.createServer();
const hostname = 'localhost';
const port = 4242;
const fs = require('fs');

server.on('request', (request, response)=>{
			if (request.method === "GET")
			{
				fs.readFile('./index.html', (err, data)=>{
				if (err)
				{
					response.statusCode = 500;
					response.end();
					return console.error(err);
				}
				response.statusCode = 200;
				response.setHeader('Content-Type','text/html');
				response.end(data);});
			}
			else
			{
				response.statusCode = 400;
				response.end();
			}
				});

server.on('connection', f_connect);
server.listen(port, hostname, f_start);

function f_connect()
{
}

function f_start()
{
	console.log(`Server running at ${hostname}:${port}`);
}
