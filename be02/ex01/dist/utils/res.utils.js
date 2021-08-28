"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerifyResponse = exports.sendIssueResponse = void 0;
function sendIssueResponse(req, res) {
    if (res.statusCode !== 200) {
        res.json({
            msg: '🍪 여권 발급 실패! 🍪',
            reason: [
                res.statusCode === 409
                    ? `409 ${res.statusMessage}; check request message`
                    : `${res.statusCode} ${res.statusMessage}`,
            ],
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
    if (res.statusCode !== 200) {
        res.json({
            msg: '🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪',
            reason: [
                'token 검증 실패',
                res.statusCode === 409
                    ? `409 ${res.statusMessage}; check request message`
                    : `${res.statusCode} ${res.statusMessage}`,
            ],
        });
    }
    else {
        console.log(req.body);
        res.json({
            msg: `🍪 ${req.body.username}님 쿠키의 세상에 오신 걸 환영 합니다~! 🍪`,
        });
    }
    res.send();
}
exports.sendVerifyResponse = sendVerifyResponse;
