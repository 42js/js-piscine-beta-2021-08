import http from "http";

const PORT = 4242;

const server = http.createServer((req, res) => {
  // 서버로 오는 HTTP 요청마다 한번씩 실행되는 콜백 함수
  res.statusCode = 200;
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("안녕, Node.js!");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
