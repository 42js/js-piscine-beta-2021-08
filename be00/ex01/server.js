const fs = require("fs"); // 파일 읽고 쓰는 모듈
const http = require("http");

const PORT = 4242;

function onRequest(req, res) {
  try {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(fs.readFile("./index.html"));
  } catch {
    res.writeHead(500, { "Content-Type": "text/plain" });
    console.log("File open error!");
    res.end("500 ERROR");
  }
}

http.createServer(onRequest).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
