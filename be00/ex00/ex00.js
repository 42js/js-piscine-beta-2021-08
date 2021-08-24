const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('안녕, Node.js!');
});

server.listen(4242, () => {
    console.log('Server running at http://localhost:4242/');
})