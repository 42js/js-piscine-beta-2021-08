const http = require('http');

port = 4242;
url = 'http://localhost:' + port;

const server = http.createServer((req, res)=>{
	res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
	res.end('안녕, Node.js!');
}).listen(port, ()=>{ console.log('Server running at ' + url); });

