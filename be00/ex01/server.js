const http  = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 4242;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile(__dirname + '/index.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end(err.toString());
                console.log(`StateCode 500: ${err.toString()}`);
            } else {
                res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
                res.end(data);
            }
        })
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})