"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const output = '안녕, Node.js!';
const server = http_1.default.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text',
        'Content-Length': output.length,
    });
    response.end(output);
});
server.listen(4242, () => {
    console.log('Server running at http://localhost:4242/');
});
