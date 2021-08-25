const http = require("http");
const fs = require('fs');
const PORT = 4242;

http
    .createServer((req, res) => {
        console.log('Server running at http://localhost:4242/');
        const path = req.url;
        const filePath = __dirname + '/data.json';
        switch (req.method) {
            case 'GET':
                if (path === "/file") {
                    if (!fs.existsSync(filePath)) 
                        fs.appendFileSync(filePath, '{}');
                    
                    const jsonFile = fs.readFileSync(filePath, 'utf-8');
                    const jsonData = JSON.parse(jsonFile);

                    if (Object.entries(jsonData).length === 0) {
                        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                        res.end('empty');
                    } else {
                        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                        const body = {
                            "message": "Content retrieved successfully.",
                            "data": jsonData
                        }
                        res.end(JSON.stringify(body, null, 2));
                    }
                } else {
                    res.statusCode = 500;
                    res.end(`Path Error(${path}) : api doesn't exists`);
                    console.error("Path Error : api doesn't exists");
                }
                break;
            case 'POST':
                if (path === '/file') {
                    let reqbody = [];
                    req
                        .on('error', (err) => {
                            console.error(`POST error : ${err}`);
                        })
                        .on('data', (data) => {
                            reqbody.push(data);
                        })
                        .on('end', () => {
                            reqbody = Buffer
                                .concat(reqbody)
                                .toString();
                            const date = new Date();
                            const [key, value] = [date.getTime(), reqbody];
                            const data = {};
                            data[key] = value;
                            const body = {
                                "message": "Content added successfully.",
                                "edited_time": date.toISOString(),
                                "data": data
                            }
                            if (!fs.existsSync(filePath)) 
                                fs.appendFileSync(filePath, '{}');
                            const jsonFile = fs.readFileSync(filePath, 'utf-8');
                            const jsonData = JSON.parse(jsonFile);
                            jsonData[key] = value;
                            fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
                                console.error(err);
                            })
                            console.log(body);
                            res.end(JSON.stringify(body, null, 2));
                        })
                }
                break;
            case 'DELETE':
                if (path === "/file") {
					if (!fs.existsSync(filePath)) 
                        fs.appendFileSync(filePath, '{}');
					fs.writeFile(filePath, '{}', (err) => {
						console.error(`DELETE error : ${err}`);
					});
					const body = {
						"message": "Content deleted successfully."
					}
					res.end(JSON.stringify(body));
				}
            default:
                console.log("This method not exists");
                break;
        }
    })
    .listen(PORT);