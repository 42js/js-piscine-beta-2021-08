const http = require('http');

const right = {"msg" : "🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪"};
const err = {"msg" : "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪"};

function parseCookie(request) {
    const list = {};
    const rc = request.headers.cookie;

    rc && rc.split(';').forEach(function(cookie) {
        const part = cookie.split('=');
        list[part.shift().trim()] = decodeURI(part.join('='));
    });

    return list;
}

http.createServer(function(request, response){
    
    if (request.url == '/pass' && request.method == 'GET') {
        let cookie = parseCookie(request);
        
        response.setHeader('Content-type', 'application/json');
        response.writeHead(200, {'Set-Cookie': 'special_cookie=42'});
        
        if (cookie['special_cookie'] === '42') response.end(JSON.stringify(right));
        else response.end(JSON.stringify(err));
    }
}).listen(4242);