const http = require('http');
const fs = require('fs');
const port = 4242;

const server = http.createServer((req, res) => {
    if (req.method==="GET" && req.url==="/file")
    {
        try {
            res.writeHeader(200, {
                "Content-Type" : "application/json; charset=utf-8"
            });

            var body = JSON.parse(fs.readFileSync("./data.json"));
            //파일이 없는 경우 생성하고 빈 객체로 초기화 
            // 빈 객체인 경우 empty 보내기
            if (JSON.stringify(body) === "{}") {
                res.end("empty");
                return ;
            }
            body.message = "Content retrieved successfully.";
            fs.writeFile("./data.json", JSON.stringify(body), (err) => {});
            // res.end(JSON.stringify(obj));
            res.end(body);
        }
        catch (error) {
            res.writeHeader(500);
            res.end(error);
            console.log(error);
        }
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})