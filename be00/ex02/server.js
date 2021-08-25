const http  = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 4242;
const Method = {
    GET: () => {},
    POST: () => {},
    DELETE: () => {},
};

if (!fs.existsSync("./data.json"))
    fs.writeFile("./data.json", "{}", (err) => {});

Method.GET = (req, res) => {
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
    } catch (err) {
        res.statusCode = 500;
        res.end(`StatusCode 500: ${err.toString()}`);
        console.log(err.toString());
    }
}

Method.POST = (req, res) => {
    var body = "";
    req.on("data", (data) => {
        body += data;
    });
    req.on("end", () => {
        try {
            res.writeHead(200, {
                "Content-Type": "application/json; charset=utf-8",
            });
            var data = JSON.parse(fs.readFileSync("./data.json"));
            key = new Date();
            data.message = "Content added successfully.";
            data.edited_time = key.toISOString();
            if (!data.data)
                data.data = {};
            data.data[key.getTime()] = body;
            fs.writeFile("./data.json", JSON.stringify(data), (err) => {});
            res.end(JSON.stringify(data));
        } catch (err) {
            res.statusCode = 500;
            res.end(`StatusCode 500: ${err.toString()}`);
            console.log(err.toString());
        }
    });
};

Method.DELETE = (req, res) => {
    try {
        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8",
        });
        var data = {};
        fs.writeFile("./data.json", "{}", (err) => {});
        data.message = "Content deleted successfully.";
        res.end(JSON.stringify(data));
    } catch (err) {
        res.statusCode = 500;
        res.end(`StatusCode 500: ${err.toString()}`);
        console.log(err.toString());
    }
}

const server = http.createServer((req, res) => {
    if (req.url === "/file") {
        if (req.method === "GET")
            Method.GET(req, res);
        else if (req.method === "POST")
            Method.POST(req, res);
        else if (req.method === "DELETE")
            Method.DELETE(req, res);
        else {
            res.statusCode = 500;
            res.end(`StatusCode 500: Server Error`);
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})