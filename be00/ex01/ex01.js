const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("./index.html", (error, data) => {
        if (error) {
            console.log(error);
            res.writeHead(500, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }
        res.end();
    })
});

server.listen(4242, () => {
    console.log('Server running at http://localhost:4242/');
});
