console.log("Fuck you");

console.log("rewrite");

var http = require('http');

http.createServer((req, res) => {
	res.write('hello');
	res.end();
}).listen(8080);

console.log("fuck");
