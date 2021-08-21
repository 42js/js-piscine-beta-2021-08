import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/pass", (request, response) => {
  var res = {
    msg: "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪",
    reason: ["token 검증 실패"],
  };
  if (request.cookies.jwt_cookie) {
    try {
      const payload = jwt.verify(request.cookies.jwt_cookie, "secretKey");
      res = {
        msg: `🍪 ${payload.username}님 쿠키의 세상에 오신 걸 환영 합니다~! 🍪`,
      };
    } catch {
      console.log("jwt error");
    }
  }
  response.status(200);
  response.send(JSON.stringify(res));
});

app.post("/pass", (request, response) => {
  var res = {
    msg: "🍪 여권 발급 실패! 🍪",
    reason: ["username did not arrive..."],
  };
  if (request.body.username) {
    var token = jwt.sign({ username: request.body.username }, "secretKey", {
      subject: "42",
      expiresIn: "2m",
    });
    response.cookie("jwt_cookie", token, {
      expires: new Date(Date.now() + 1000 * 60 * 2),
    });
    res = {
      msg: "🍪 여권 발급 성공! 🍪",
    };
  }
  response.status(200);
  response.send(JSON.stringify(res));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
