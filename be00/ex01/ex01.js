const http = require('http');

const port = 4242;
const url = 'http://localhost:' + port;

const fs = require('fs');

function send500Message(res){
	res.writeHead(500, {"Content-Type":"text/html; charset=utf-8"});
	fs.readFile('500.html', (err, doc)=>{
		if (err)
			return console.error('500 Error');
		else
			res.end(doc);
	});
}

http.createServer(async (req, res)=>{
	res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
	fs.readFile('index.html', (err, doc)=>{
		if (err){
			send500Message(res);
		}
		else
			res.end(doc);
	});
}).listen(port, ()=>{ console.log('Server running at ' + url); });
