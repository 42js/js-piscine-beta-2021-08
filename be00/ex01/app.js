const http = require('http');
const fs = require('fs');
const port = 4242;

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/index.html', (err, data) => {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/html'
            });
            res.write(err.stack);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
        }
        res.end();
    });
}).listen(port);
console.log(`Server running at http://localhost:${port}/`);