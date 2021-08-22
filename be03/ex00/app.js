const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const verify = require("./auth/verify.js");
const auth = require("./auth/auth.js");

dotenv.config();
auth.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.post("/signin", auth.singIn);
app.get("/signout", auth.singOut);
app.post("/signup", auth.singUp);

app.use(auth.jwtGuard);
app.post("/pwchange", auth.pwChange);

app.get("/service", (request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.status(200).send(verify.errorJson(200, "service"));
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`);
});
