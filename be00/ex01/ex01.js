import { createServer } from "http";
import fs from "fs";

createServer((req, res) => {
  if (req.method === "GET") {
    fs.readFile("./ex01.html", (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>405 Method Not Allowed</h1>");
  }
}).listen(4242, () => {
  console.log("Server running at http://localhost:4242/");
});
