import http, { createServer } from "http";
import console from "console";
import fs from "fs";

const SCHEME = "http";
const HOSTNAME = "localhost";
const PORT = 4242;

const server = createServer((req, res) => {
  fs.readFile("./ex02.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.write("<h1>500 Internal Server Error<h1>");
      res.end();
      console.log(err.toString());
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data.toString());
      res.end();
    }
  });
}).listen(PORT, () => {
  console.log(`Server is running at ${SCHEME}://${HOSTNAME}:${PORT}/`);
});

http
  .get("http://localhost:4242", (res) => {
    const { statusCode } = res;
    const contentType = res.headers["content-type"];

    let error;
    if (statusCode !== 200 && statusCode !== 500) {
      error = new Error(`Request Failed.\nStatus Code: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
      error = new Error(
        `Invalid content-type.\nExpected text/html but received ${contentType}`
      );
    }
    if (error) {
      console.error(error.message);
      res.resume();
      return;
    }
  })
  .on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });
