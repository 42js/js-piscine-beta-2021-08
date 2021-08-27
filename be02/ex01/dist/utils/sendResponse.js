"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendResponse(req, res) {
    console.log(res.statusCode);
    res.send();
}
exports.default = sendResponse;
