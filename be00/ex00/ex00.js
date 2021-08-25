import { createServer } from "http";
import console from "console";

// webserver object 생성
// 이 server로 오는 HTTP 요청마다 createServer에 전달된 함수가 한번씩 호출됨
createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];

  request //
    .on("error", (err) => console.log(err))
    .on("data", (chunk) => body.push(chunk))
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(method);
      console.log(url);
      console.log(headers);
      console.log(body);
      response.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
        Connection: "close",
      });
      response.write("안녕, Node.js!"); // content 내보내기: body 부분의 content
      response.end(); // content 출력 완료(응답 종료)
    });
}).listen(4242, () => {
  console.log(`Server is running at http://localhost:4242/`);
});

// favicon = favorite + icon
// 웹사이트 주소 옆이나 브라우저 탭에 나타나는 작은 아이콘
