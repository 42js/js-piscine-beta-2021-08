var http = require('http');
var fs = require('fs');
var port = 4242;

const server = http.createServer(function(req, res) {
    if (req.method === "GET")
    {
        try {
            res.writeHeader(200, {
                "Content-Type" : "text/html; charset=utf-8"
            });
            res.end(fs.readFileSync("./index.html"));
        }
        catch {
            res.writeHeader(500);
            console.log("no such");
            res.end("no such");
        }
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});