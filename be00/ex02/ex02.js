const http = require('http');
const fs = require('fs');
const { stringify } = require('querystring');

const hostname = 'localhost';
const port = 4242;

function send500Message(err, res) {
	res.statusCode = 500;
	res.setHeader("Content-Type", "text/plain");
	res.end(String(err));
	console.log(err);
}

function takeFileData(req, res) {
	fs.readFile('data.json', (err, data) => {
		try {
			if (err) throw err;
			res.statusCode = 200;
			const fileData = JSON.parse(data);
			if (JSON.stringify(fileData) === "{}") {
				res.setHeader("Content-Type", "text/plain");
				res.end("empty")
			}
			else {
				const jsonData = {};
				jsonData.message = "Content retrieved successfully.";
				jsonData.data = fileData;
				res.setHeader("Content-Type", "application/json");
				res.end(JSON.stringify(jsonData));
			}
		}
		catch (err) {
			if (err.code == 'ENOENT') {
				fs.writeFile("data.json", "{}", (err)=>{
					send500Message(err, res);
				});
				res.statusCode = 500;
				res.setHeader("Content-Type", "text/plain");
				res.end(String(err));
			}
			else{
				send500Message(err, res);
			}
		}
	})
}

function onRequest(req, res) {
	if (req.method == 'GET' && req.url == '/file') {
		takeFileData(req, res);
	}

}

const server = http.createServer(onRequest);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})