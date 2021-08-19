const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
    if (request.method == 'GET') {
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        fs.readFile(__dirname + 'index.html', (err, data) => {
            if (err) {
                request.statusCode = 500;
                response.end(err);
                console.log(`[${request.statusCode}] Server Error`)
            }
            else response.end(data, 'utf-8');
        });
    }
})

server.listen(4242, function() {
    console.log("Server running at http://localhost:4242/");
})