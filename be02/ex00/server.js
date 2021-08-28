const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get("/pass", (req, res) => {
    if (req.cookies.special_cookie && req.cookies.special_cookie === "42")
        res.status(200).json({
            "msg" : "🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪"
          });
    else {
        res.status(401).json({
            "msg" : "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪"
          });
    }
});

app.listen(4242, () => {
    console.log("Server running at http://localhost:4242/");
})