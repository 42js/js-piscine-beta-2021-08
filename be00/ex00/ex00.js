var http = require('http');
var port = 4242;

const server = http.createServer(function(req, res) {
    if (req.method === "GET")
    {
        res.writeHead(200, {
            "Content-Type" : "text/plain; charset=utf-8"
        });
        res.end("안녕, Node.js!\n");
    }
});

server.listen(port, () => {
    console.log("Server running at http://localhost:${port}/");
});