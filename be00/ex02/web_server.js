const http = require("http");

const port = 4242;
const hostname = "localhost";

const fs = require("fs");
const file = "./data.json";

http.createServer((req, res) => {
	if (req.method == "GET") {
		console.log("GET 요청이 왔습니다.")
		console.log(req.url);
		if (req.url === '/file') {
			fs.readFile(file, 'utf8', (err, value) => {
				if (err)
					return setError_500(res);
				// not error
				res.statusCode = 200;
				if (value) {
					// console.log(value);
					res.setHeader("Content-Type", "Application/json");
					// value 의 message 를 "Content retrieved successfully." 로 세팅해야합니다.
					// value 를 object 로 바꾸고, 값을 추가하고, string 으로 바꾼다.
					var temp = JSON.parse(value);
					temp["message"] = "Content retrieved successfully.";
					// console.log(temp);
					res.end(JSON.stringify(temp));
				}
				else {
					res.setHeader("Content-Type", "text/plain");
					res.end("empty");
				}
			})
		} else {
			setError_500(res);
		}
	} else if (req.method === "POST") {
		console.log("POST 요청이 왔습니다.");
		if (req.url === "/file") {
			fs.readFile(file, 'utf8', (err, value) => {
				if (err)
					return setError_500(res);
				// read entity body using ReadableStream
				let body = [];
				var temp = JSON.parse(value);
				req.on('data', (chunk) => {
					body.push(chunk);
				}).on('end', () => {
					body = Buffer.concat(body).toString();  // 'body' 에 전체 요청 바디가 문자열로 담긴다.
					console.log(`body : ${body}`);  // 왜 안됨?
					// console.log(`get time : ${new Date().getTime()}`);
					// json 에 message 부분 추가
					temp["message"] = "Content added successfully.";
					temp["edited_time"] = new Date().toISOString();
					temp["data"][new Date().getTime()] = body;
					console.log(temp);
					fs.writeFile(file, JSON.stringify(temp), 'utf8', (error) => {
						if (error)
							return setError_500(res);
					})
					res.statusCode = 200;
					res.setHeader("Content-Type", "Application/json");
					res.end(JSON.stringify(temp));
				});
			})
		} else {
			setError_500(res);
		}
	} else if (req.method === "DELETE") {
		console.log("DELETE 요청이 왔습니다.");

	} else {
		setError_500(res);
	}
}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

function setError_500(res) {
	res.statusCode = 500;
	res.end();
}
