var http = require('http');
var cookie = require('cookie');

var server = http.createServer(function(request, response){
    response.writeHead(200, {
        'Set-Cookie':[
            'special_cookie=42; Path=/pass',
        ],
        'Content-Type':'text/plain; charset=utf-8'
    });
    var cookies = {};
    if (request.headers.cookie !== undefined){
        cookies = cookie.parse(request.headers.cookie);
        if (cookies.special_cookie === '42'){
            response.write("🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪");
        }else{
            response.write("🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪");
        }
    }else{
        response.write("🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪");
    }
    response.end();
}).listen(4242);
