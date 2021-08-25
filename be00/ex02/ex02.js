const http = require('http');
const fs = require('fs');

const checkIfFileExists = () => {
    if (!fs.existsSync("./data.json")) {
        fs.writeFileSync("./data.json", "{}");
    }
};

const handleUrlError = (req, res) => {
    res.writeHead(404);
    res.end("Invalid url. ");
};

const getFileData = (req, res) => {
    fs.readFile("./data.json", (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end("Cannot read file. ");
        } else {
            const body = {};
            const content = JSON.parse(data);
            if (JSON.stringify(content) === "{}") {
                res.writeHead(200, {"Content-Type": "text/plain"});
                res.end("empty");
                return ;
            }
            res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
            body.message = "Content retrieved successfully.";
            body.data = content;
            res.end(JSON.stringify(body));
        }
    });
};

const postFileData = (req, res) => {
    let addContent = "";
    req.on("data", (data) => {
        addContent += data;
    });
    req.on("end", () => {
        fs.readFile("./data.json", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Cannot read file (post)");
            } else {
                res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
                const body = {};
                const content = JSON.parse(data);
                content[Date.now()] = addContent;
                body.message = "Content added successfully.";
                body.edited_time = new Date().toISOString();
                if (!body.data) body.data = {};
                body.data[Date.now()] = addContent;
                fs.writeFileSync("./data.json", JSON.stringify(content));
                res.end(JSON.stringify(body));
            }
        })
    });
};

const deleteFileData = (req, res) => {
    const data = {};
    fs.writeFile("./data.json", JSON.stringify(data), (err) => {
        if (err) {
            res.writeHead(500);
            res.end("Cannot delete file data");
        }
        else {
            res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
            data.message = "Content deleted successfully.";
            res.end(JSON.stringify(data));
        }
    });
};

const server = http.createServer((req, res) => {
    const {method, url} = req;
    if (url !== "/file") {
        handleUrlError(req, res);
        return ;
    }
    checkIfFileExists();
    if (method === "GET") {
        getFileData(req, res);
    } else if (method === "POST") {
        postFileData(req, res);
    } else if (method === "DELETE") {
        deleteFileData(req, res);
    }
});

server.listen(4242, () => {
    console.log('Server running at http://localhost:4242/');
})

