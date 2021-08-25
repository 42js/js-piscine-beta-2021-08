const http = require("http");
const fs = require("fs");
const port = 4242;
const hostname = "localhost";

let emptyData = {
    data: {},
};

let emptyJson = JSON.stringify(emptyData);

function makeEmaptyFile() {
    fs.writeFile("data.json", emptyJson, (err) => {
        if (err) console.error(err);
    });
}

function addDataFile(originJsonData, newDataText) {
    if (typeof newDataText !== "string") {
        throw "body is not textfile";
    }
    const Jsonkey = new Date().getTime();

    originJsonData.data[Jsonkey] = newDataText;
    const stringData = JSON.stringify(originJsonData);
    fs.writeFile("data.json", stringData, (err) => {
        if (err) console.error(err);
    });
    return stringData;
}

function setFile(req, res) {
    if (req.url.startsWith("/file")) {
        if (req.method === "GET") {
            try {
                const readData = fs.readFileSync("data.json");
                const jsonData = JSON.parse(readData);
                //readfile success
                if (Object.keys(jsonData.data).length === 0) {
                    //빈 객체
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end("empty");
                } else {
                    //json 파일 보내기
                    res.writeHead(200, { "Content-Type": "application/json" });
                    const resJson = res.end(readData);
                }
            } catch (err) {
                if (err.code === "ENOENT") {
                    //no file
                    makeEmaptyFile();
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end("empty");
                } else {
                    console.error(err);
                    res.statusCode = 500;
                    res.end();
                }
            }
        } else if (req.method === "POST") {
            try {
                let reqData;
                req.on("data", (chunk) => {
                    reqData = chunk;
                });
                req.on("end", () => {
                    if (reqData === undefined) throw "body에 값이 없습니다.";
                    reqData = reqData.toString();
                    const readData = fs.readFileSync("data.json");
                    const jsonData = JSON.parse(readData);
                    console.log("readData", jsonData);

                    const newJsonStringData = addDataFile(jsonData, reqData);
                    res.writeHead(200, {});
                    res.end(newJsonStringData);
                });
            } catch (err) {
                if (err.code === "ENOENT") {
                    //no file
                    makeEmaptyFile();
                    const newJsonStringData = addDataFile(jsonData, req.body);

                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(newJsonStringData);
                } else {
                    console.error(err);
                    res.statusCode = 500;
                    res.end();
                }
            }
        } else if (req.method === "DELETE") {
            makeEmaptyFile();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({ message: "Content deleted successfully." })
            );
        }
    } else {
        res.statusCode = 404;
        res.end();
    }
}

const server = http.createServer(setFile);
server.listen(port, hostname, () => {
    console.log("Server running at http://localhost:4242/");
});
