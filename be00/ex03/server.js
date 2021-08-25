const express = require("express");
const line = require("./line");
// const station = require("./station");

const app = express();
const hostname = "localhost";
const port = 4242;

app.use("/line", line);
// app.use("/station", station);
app.use((req, res, next) => res.send(err));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
