import { createServer } from "http";

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.write("안녕, Node.js!");
  res.end();
}).listen(4242, () => {
  console.log("Server running at http://localhost:4242/");
});
