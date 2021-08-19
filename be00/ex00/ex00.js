const http = require('http'); // 노드 모듈을 가져온다
const hostname = "localhost"; // 사용할 서버 호스트네임
const port = 4242; // 사용할 서버 포트

// 서버를 만든다
const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
	res.end("안녕, Node.js!\n") // 응답 데이터 전송
})

// 서버를 요청 대기 상태로 만든다
server.listen(port, hostname, () => {
	// 요청 대기가 완료되면 실행되는 콜백 함수
	console.log(`Server running at http://${hostname}:${port}/`)
})

