console.log("Fuck you");

console.log("rewrite");

const http = require('http');

const server = http.createServer((req, res) => {
	if (req.method === 'GET')
		console.log(`GET 요청입니다.`);
	res.statusCode = 200;
	res.setHeader("Content-Language", "en");
	res.setHeader("Content-Type", "text/plain");
	// 한글이 안되네... curl 로 하면 잘 보임
	res.end("안녕, Fucking Node.js");
});

server.listen(4242, () => {
	console.log(`Server is running at http://localhost:4242`);
})
