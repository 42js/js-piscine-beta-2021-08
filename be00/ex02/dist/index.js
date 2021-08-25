"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const port = 4242;
const refreshTemp = '{}';
const emptyString = 'empty\n';
const server = http_1.default.createServer((request, response) => {
    try {
        if (!(request.url === '/file' &&
            (request.method === 'GET' ||
                request.method === 'POST' ||
                request.method === 'DELETE')))
            throw new Error();
        if (request.method === 'GET') {
            const getBodyTemp = {
                message: 'Content retrieved successfully.',
                data: {},
            };
            fs_1.default.readFile('./data.json', 'utf8', (err, filedata) => {
                if (err) {
                    fs_1.default.writeFile('./data.json', refreshTemp, (error) => {
                        if (error) {
                            response.writeHead(500, {
                                'Content-Type': 'text',
                                Connection: 'close',
                            });
                            response.end();
                        }
                        else
                            response.end(emptyString);
                    });
                }
                else if (filedata.length === 0) {
                    response.end(emptyString);
                }
                else {
                    getBodyTemp.data = JSON.parse(filedata);
                    console.log(getBodyTemp);
                    response.writeHead(200, {
                        'Content-Type': 'application/json',
                    });
                    response.write(JSON.stringify(getBodyTemp));
                    response.end();
                }
            });
        }
        else if (request.method === 'POST') {
            const postBodyTemp = {
                message: 'Content added successfully.',
                edited_time: '',
                data: {},
            };
            let fileJson;
            let requestBody = '';
            request.on('data', (chunk) => {
                requestBody += chunk.toString();
            });
            request.on('end', () => {
                if (requestBody.length === 0)
                    response.end(emptyString);
                else {
                    fs_1.default.readFile('./data.json', 'utf8', (err, filedata) => {
                        const currentTime = new Date();
                        if (err) {
                            response.writeHead(500, {
                                'Content-Type': 'text',
                                Connection: 'close',
                            });
                            response.end();
                        }
                        else {
                            fileJson = JSON.parse(filedata);
                            fileJson[currentTime.getTime()] = requestBody;
                            fs_1.default.writeFile('./data.json', JSON.stringify(fileJson), (fileWriteError) => {
                                if (fileWriteError) {
                                    response.writeHead(500, {
                                        'Content-Type': 'text',
                                        Connection: 'close',
                                    });
                                    response.end();
                                }
                                else {
                                    postBodyTemp.edited_time = currentTime.toISOString();
                                    postBodyTemp.data = {
                                        [currentTime.getTime()]: fileJson[currentTime.getTime()],
                                    };
                                    response.writeHead(200, {
                                        'Content-Type': 'application/json',
                                    });
                                    response.write(JSON.stringify(postBodyTemp));
                                    response.end();
                                }
                            });
                        }
                    });
                }
            });
        }
        else if (request.method === 'DELETE') {
            const deleteBody = {
                message: 'Content deleted successfully.',
            };
            fs_1.default.writeFile('./data.json', refreshTemp, (error) => {
                if (error) {
                    response.writeHead(500, {
                        'Content-Type': 'text',
                        Connection: 'close',
                    });
                    response.end();
                }
                else {
                    response.writeHead(200, {
                        'Content-Type': 'application/json',
                    });
                    response.write(JSON.stringify(deleteBody));
                    response.end();
                }
            });
        }
    }
    catch (err) {
        response.writeHead(403, {
            'Content-Type': 'text',
            Connection: 'close',
        });
        response.end('Stay off ;)');
    }
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
