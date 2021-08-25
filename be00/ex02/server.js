const http  = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 4242;
const Method = {};

if (!fs.existsSync("./data.json"))
    fs.writeFile("./data.json", "{}", (err) => {});

Method['GET'] = (req, res) => {
    try {
        res.writeHead(200, { 
            "Content-Type": "application/json; charset=utf-8",
        });
        var data = JSON.parse(fs.readFileSync("./data.json"));
        if (JSON.stringify(data) === "{}") {
            res.end("empty");
            return ;
        } else {
            data.message = "Content retrieved successfully.";
            fs.writeFile("./data.json", JSON.stringify(data), (err) => {});
            res.end(JSON.stringify(data));
        }
    }
    catch (err) {
        res.statusCode = 500;
        res.end(`StatusCode 500: ${err.toString()}`);
        console.log(err.toString());
    }
}

// Method["POST"] = (req, res) => {

// }

const server = http.createServer((req, res) => {
    if (req.url="/file" && req.method === "GET")
        Method["GET"](req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})