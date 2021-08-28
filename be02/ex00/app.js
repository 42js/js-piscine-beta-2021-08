import express from "express";
import cookieParser from "cookie-parser";
// import dotenv from "dotenv";

// dotenv.config();
const app = express();
const port = 4242;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/pass", (req, res) => {
    res.status(200);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    // console.log(req.cookies);
    if (req.cookies.special_cookie == 42) {
        res.send(JSON.stringify({ msg: "🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪" }));
        return;
    } else {
        res.send(JSON.stringify({ msg: "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪" }));
    }
});

app.get("*", (req, res) => {
    res.status(404).send("Not Found");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});