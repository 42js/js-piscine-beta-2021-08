import http, { createServer } from "http";
import console from "console";

const SCHEME = "http";
const HOSTNAME = "localhost";
const PORT = 4242;

// webserver object 생성
const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.write(JSON.stringify("안녕, Node.js!")); // content 내보내기: body 부분의 content: ;
  res.end(); // content 출력 완료(응답 종료)
}).listen(4242, () => {
  console.log(`Server is running at ${SCHEME}://${HOSTNAME}:${PORT}/`);
});

http
  .get("http://localhost:4242", (res) => {
    const { statusCode } = res;
    const contentType = res.headers["content-type"];

    let error;
    if (statusCode !== 200) {
      error = new Error(`Request Failed.\nStatus Code: ${statusCode}`);
    } else if (!/^text\/plain/.test(contentType)) {
      error = new Error(
        `Invalid content-type.\nExpected text/html but received ${contentType}`
      );
    }
    if (error) {
      console.error(error.message);
      res.resume();
      return;
    }

    res.setEncoding("utf8");
    let rawData = "";
    res.on("data", (chunk) => {
      rawData += chunk;
    });
    res.on("end", () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  })
  .on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });
