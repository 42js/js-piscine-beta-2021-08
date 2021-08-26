const http = require("http");
const fs = require("fs");
const port = 4242;
const hostname = "localhost";

function readHtml(req, res) {
    if (req.method === "GET") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end();
                return console.log(err);
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
}

const server = http.createServer(readHtml);
server.listen(port, hostname, () => {
    console.log("Server running at http://localhost:4242/");
});
