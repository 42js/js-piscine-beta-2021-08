var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const passRouter = require("./routes/passRouter");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/pass", passRouter);

app.use(function get404Err(req, res, next) {
    res.status(404).json({ message: "404 not found" });
});
module.exports = app;
