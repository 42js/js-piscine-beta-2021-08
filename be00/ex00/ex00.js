import http from "http";

const hostname = "localhost";
const PORT = 4242;

const server = http.createServer((req, res) => {
  // 요청이 오면 실행되는 콜백 함수
  res.end("Helloooo Node.js!");
  //   res.send("HELLOOOO");
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
