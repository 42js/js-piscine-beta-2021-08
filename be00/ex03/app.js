const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const stationRouter = require("./routes/station");
const lineRouter = require("./routes/line");
const { openFile, openFileErr } = require("./middlewares/opneFile");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/station", openFile, stationRouter);
app.use("/line", openFile, lineRouter);

app.use(openFileErr);
app.use(function (req, res, next) {
    res.status(404).json({ message: "cant find that!" });
});
module.exports = app;
