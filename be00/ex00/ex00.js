const http = require('http');
const server = http.createServer();
const port = 4242;

server.on('request', (request, response)=>{
			if (request.method === "GET")
			{
				response.statusCode = 200;
				response.setHeader('Content-Type','text/plain; charset=utf-8');
				response.write("안녕, Node.js");
				response.end();
			}
			else
			{
				response.statusCode = 400;
				response.end();
			}
				});

server.on('connection', f_connect);
server.listen(port, f_start);

function f_connect()
{
	console.log("Connect");
}

function f_start()
{
	console.log("Server is starting");
}
