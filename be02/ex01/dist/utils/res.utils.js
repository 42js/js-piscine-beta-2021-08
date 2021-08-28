"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerifyResponse = exports.sendIssueResponse = void 0;
function sendIssueResponse(req, res) {
    console.log(res.statusCode);
    if (res.statusCode !== 200) {
        res.json({
            msg: '🍪 여권 발급 실패! 🍪',
            reason: [res.statusMessage],
        });
    }
    else {
        res.json({
            msg: '🍪 여권 발급 성공! 🍪',
        });
    }
    res.send();
}
exports.sendIssueResponse = sendIssueResponse;
function sendVerifyResponse(req, res) {
    console.log(res.statusCode);
    res.send();
}
exports.sendVerifyResponse = sendVerifyResponse;
