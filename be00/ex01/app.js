import * as http from "http";
import * as fs from "fs";

var app = http.createServer((request, response) => {
  try {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(fs.readFileSync("./index.html"));
  } catch {
    response.writeHead(500);
    console.log("no such file or directory");
    response.end("no such file or directory");
  }
});
app.listen(4242, () => {
  console.log("Server running at http://localhost:4242/");
});
