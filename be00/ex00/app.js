const http = require('http');
const port = 4242;
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('안녕, Node.js!');
    res.end();
}).listen(port);
console.log(`Server running at http://localhost:${port}/`);