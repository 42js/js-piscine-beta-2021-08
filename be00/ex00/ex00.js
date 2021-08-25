const http = require('http');
http
    .createServer((req, res) => {
        console.log('Server running at http://localhost:4242/');
        return req
            .on('error', (err) => { // 요청에 에러
                console.error(err);
            })
            .on('data', (data) => { // 요청에 데이터 있을 때
                console.log(data);
            })
            .on('end', () => { // 요청의 데이터가 모두 받아졌으면
                res.on('error', (err) => { // 응답에 에러
                    console.error(err);
                });
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('안녕, Node.js!');
            })
    })
    .listen(4242);