let fs = require('fs');
let http = require('http');

http.createServer((request, response) => { // request, response
    fs.readFile('index.html', function (error, data) {
        if (error) {
            console.log(error);
            response.statusCode = 500;
            response.end();
        }
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(data);
    })
}).listen(4242, function () {
    console.log('Server Running at http://localhost:4242')
})