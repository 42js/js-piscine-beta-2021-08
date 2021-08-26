const http = require("http");
const fs = require("fs");
const port = 4242;
const hostname = "localhost";

function makeEmaptyFile() {
    try {
        fs.writeFileSync("data.json", "{}");
    } catch (error) {
        throw error;
    }
}

function addDataFile(originJsonData, newDataText) {
    try {
        const date = new Date();
        const resData = { message: "", edited_time: "", data: "" };
        originJsonData[date.getTime()] = newDataText;
        const stringData = JSON.stringify(originJsonData);
        fs.writeFileSync("data.json", stringData);
        resData.data = originJsonData;
        resData.edited_time = date;
        resData.message = "Content added successfully.";
        return JSON.stringify(resData);
    } catch (error) {
        throw error;
    }
}

function getReqData(req, res) {
    try {
        let reqData;
        const readData = fs.readFileSync("data.json");
        req.on("data", (chunk) => {
            reqData = chunk;
        });
        req.on("end", () => {
            if (reqData === undefined) throw "body에 값이 없습니다.";
            reqData = reqData.toString();
            const jsonReadData = JSON.parse(readData);
            console.log("readData", jsonReadData);

            const resData = addDataFile(jsonReadData, reqData);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(resData);
        });
    } catch (err) {
        if (err.code === "ENOENT") {
            //no file
            makeEmaptyFile();
            getReqData(req, res);
        } else {
            console.error(err);
            res.statusCode = 500;
            res.end();
        }
    }
}

function setFile(req, res) {
    if (req.url.startsWith("/file")) {
        if (req.method === "GET") {
            try {
                const readData = fs.readFileSync("data.json");
                const jsonData = JSON.parse(readData);
                const resData = { message: "", data: "" };
                //readfile success
                if (Object.keys(jsonData).length === 0) {
                    //빈 객체
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end("empty");
                } else {
                    //json 파일 보내기
                    res.writeHead(200, { "Content-Type": "application/json" });
                    resData.data = JSON.parse(readData);
                    resData.message = "Content retrieved successfully.";
                    res.end(JSON.stringify(resData));
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
            getReqData(req, res);
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
