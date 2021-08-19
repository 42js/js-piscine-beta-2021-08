import * as http from "http";

var app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("안녕, Node.js!");
});
app.listen(4242, () => {
  console.log("Server running at http://localhost:4242/");
});
