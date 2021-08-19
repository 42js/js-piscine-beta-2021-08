const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	if (req.method === "GET") {
		console.log("GET 요청입니다.");
		// fs.readFile(`./index.html`, (err, data) => {
		fs.readFile(`./index1.html`, (err, data) => {
			if (err) {
				res.statusCode = 500;
				res.end();
				console.log(err);
			} else {
				res.statusCode == 200;
				res.setHeader("Content-Type", "text/html");
				res.end(data);
			}
		})
	}
}).listen(4242, () => {
	console.log(`Server running at http://localhost:4242/`);
})
