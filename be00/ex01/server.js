const fs = require("fs"); // 파일 읽고 쓰는 모듈
const http = require("http");

const PORT = 4242;

function send500Message(res) {
  res.writeHead(500, { "Content-Type": "text/plain" }); // 단순한 글자 출력
  res.write("500 ERROR...");
  console.log("500 error occurred!");
  res.end();
}

function onRequest(req, res) {
  if (req.method == "GET" && req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" }); // 웹페이지 출력
    fs.createReadStream("./index.html", () => {
      if (err) send500Message();
    }).pipe(res);
  }
}

http.createServer(onRequest).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
