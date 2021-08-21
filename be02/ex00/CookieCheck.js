//let http = require('http');
let express = require('express');
let cookieParser = require('cookie-parser');
//let cookieSession = require('cookie-session');

let app = express();
app.use(cookieParser());

/*
app.use(cookieSession({
	name: 'special_cookie',
	keys: [42]
}))
*/
app.get('/pass', function(req, res) {
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
		//var cookies = {};
		console.log("Cookie!!");
		//res.cookie('special_cookie', '42');
		//res.cookie('Common_cookie', '42');
		console.log('Cookie : ', req.cookies);
	/*	
		if (req.cookies[special_cookie=42])
		{
  			res.write("msg" : "🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪");
		}
		else
		{
			res.write("msg" : "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪");
		}
	*/	

		res.end("cookie");
})
app.listen(3000)
