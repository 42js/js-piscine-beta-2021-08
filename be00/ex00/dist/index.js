"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const port = 4242;
const server = http_1.default.createServer((request, response) => {
    const output = '안녕, Node.js!';
    response.writeHead(200, {
        'Content-Type': 'text',
        'Content-Length': output.length,
    });
    response.end(output);
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
