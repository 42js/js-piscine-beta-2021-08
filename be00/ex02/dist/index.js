"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const port = 4242;
const server = http_1.default.createServer((request, response) => {
    try {
        if (!(request.url === '/file' || request.url === '/file') ||
            !(request.method === 'GET' ||
                request.method === 'POST' ||
                request.method === 'DELETE'))
            throw new Error();
        fs_1.default.readFile('./index.html', (err, data) => {
            if (err) {
                throw err;
            }
            response.end(data);
        });
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
