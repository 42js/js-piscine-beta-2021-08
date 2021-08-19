const http = require('http');
const server = http.createServer();
const port = 4242;
const hostname = "localhost";
server.on('request', (request, response)=>{
			if (request.method === "GET" && request.url == "/")
			{
				response.statusCode = 200;
				response.setHeader('Content-Type','text/plain; charset=utf-8');
				response.write("안녕, Node.js");
				response.end();
			}
			});

server.on('connection', ()=>{});
server.listen(port,hostname, f_start);

function f_start()
{
	console.log(`Server is running at ${hostname}:${port}`);
}
