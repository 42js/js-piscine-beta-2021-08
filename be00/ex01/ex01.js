import { createServer } from "http";
import fs from "fs/promises";

createServer(async (req, res) => {
  try {
    const data = await fs.readFile("./ex01.html");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  } catch (err) {
    console.log(err);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(err.message);
  }
}).listen(4242, () => {
  console.log("Server running at http://localhost:4242/");
});
