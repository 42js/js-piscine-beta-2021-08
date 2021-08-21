let express = require('express'); 
let cookieParser = require('cookie-parser');
let app = express();
app.use(cookieParser());
const port = 4242;

app.get('/pass', (req, res)=>{
	const r = req.headers.cookie;
	if (r == "special_cookie=42")
	{
		res.status(200);
		res.send({"msg" : "🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪"});
		res.end();
	}
	else
	{
		res.status(403);
		res.send({"msg" : "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪"});
		res.end();
	}});

app.listen(port);
