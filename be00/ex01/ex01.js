import { createServer } from "http";
import console from "console";
import fs from "fs";

createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];

  request //
    .on("error", (err) => console.log(err))
    .on("data", (chunk) => body.push(chunk))
    .on("end", () => {
      body = Buffer.concat(body).toString();
      //   console.log(method);
      //   console.log(url);
      //   console.log(headers);
      //   console.log(body);
      fs.readFile("./ex01.html", (err, data) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "text/html" });
          response.write("<h1>500 Internal Server Error<h1>");
          response.end();
          console.log(err.toString());
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data.toString());
          response.end();
        }
      });
    });
}).listen(4242, () => {
  console.log("Server is running at http://localhost:4242/");
});
