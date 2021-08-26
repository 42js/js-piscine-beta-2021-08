import { createServer } from "http";
import fs from "fs";

createServer((req, res) => {
  const { method, url } = req;
  let body = [];

  req.on("error", (err) => console.log(err));
  req.on("data", (chunk) => body.push(chunk));
  try {
    console.log(method, url);
    if (req.method === "GET" && req.url === "/file") {
      try {
        const data = JSON.parse(fs.readFileSync("./data.json"));
        res.writeHead(200, {
          "Content-Type": "application.json; charset=utf-8",
        });
        res.end(JSON.stringify(data));
      } catch (err) {
        fs.writeFileSync("./data.json", "{}");
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("empty");
      }
    } else if (req.method === "POST" && req.url === "/file") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        const data = JSON.parse(fs.readFileSync("./data.json"));
        const date = new Date();
        data.message = "Content added successfully";
        data.edited_time = date.toISOString();
        data.data[date.getTime()] = body;
        fs.writeFileSync("./data.json", JSON.stringify(data));
      });
    } else if (req.method === "DELETE" && req.url === "/file") {
      fs.writeFileSync("./data.json", "{}");
      res.writeHead(
        200,
        JSON.stringify({
          "Content-Type": "application/json; charset=utf-8",
        })
      );
      res.end(
        JSON.stringify({
          message: "Content deleted successfully.",
        })
      );
    }
  } catch (err) {
    console.log(err);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(err.message);
  }
}).listen(4242, () => {
  console.log("Server running at http://localhost:4242/");
});
