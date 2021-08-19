const http = require('http');
const fs = require('fs');

function send500Message(response){
	//console.error(err);
	console.log('Internal Server Error 500 : Somthing broke!');
	response.writeHead(500, {"Content-Type": "text/html"});
	response.write('<h1>Internal Server Error 500 : Somthing broke!</h1>');
	response.end();
}

const server = http.createServer();
server.on('request', function(request, response) {
		fs.readFile('./index.html', function(err, data) {
				if (err)
				{
					send500Message(response);
				}
				else
				{
					response.writeHead(200, {"Content-Type": "text/html"});
					//response.write("500 Error : Somthing broke!");
					response.write(data);
					response.end();
				}
	});
});
//server.on('clientError', function ())

server.listen(4242, function(){
	console.log("Server running at http://localhost:4242/");
});

server.on('error', function() {
		console.error('Somthing broke!');
		})
