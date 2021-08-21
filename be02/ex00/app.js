import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/pass", (request, response) => {
  response.status(200);
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  if (request.cookies.special_cookie == 42) {
    response.send(
      JSON.stringify({ msg: "🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪" })
    );
    return;
  }
  response.send(
    JSON.stringify({ msg: "🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪" })
  );
});

app.get("*", (request, response) => {
  response.status(404);
  response.send("can't found");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
