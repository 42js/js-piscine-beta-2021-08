let fs = require('fs');
let http = require('http');
let cur = new Date();

http.createServer((request, response) => { // request, response
    if (request.url === '/file') {
        if (request.method === 'GET') {
            fs.readFile('data.json', function (error, data) {
                if (error) {
                    console.log(error);
                    fs.writeFile('data.json', '', () => {
                        response.end();
                    });
                }
                // 파일 내용이 비어있는지 확인 후, 비어있으면 empty라는 plain text를 보냄
                if (!error && data == '') {
                    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
                    response.end('empty');
                }
                else {
                    response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' }); // json 형식
                    response.end(data);
                }
            });
        } else if (request.method === 'POST') {
            fs.readFile('data.json', function (error, data) {
                let input;
                let tmp;
                if (error) {
                    console.log(error);
                    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                    response.end();
                }
                // 파일 내용이 비어있는지 확인 후, 비어있으면 empty라는 plain text를 보냄
                if (!error && data == '') {
                    input = {  "message": "Content added successfully.",
                    "edited_time": "2021-07-02T08:55:57.387Z",
                    "data": {
                      "1625216157387": "Hello"
                    }}
                    fs.writeFile('data.json', input, () => {
                        response.end();
                    });
                }
                else {
                    response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' }); // json 형식
                    response.end(data);
                }
            });
        } else if (request.method === 'DELETE') {

        }
    } else {
        response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end();
    }
    
}).listen(4242, function () {
    console.log('Server Running at http://localhost:4242')
})