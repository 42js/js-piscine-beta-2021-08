const http = require('http');

const server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    response.end('안녕, Node.js!');
})

server.listen(4242, function() {
    console.log("Server running at http://localhost:4242/");
})