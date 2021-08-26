const fs = require("fs");

function openFile(req, res, next) {
    try {
        const readMetroFile = fs.readFileSync("seoul_metro_station.json");
        req.readMetroFileJson = JSON.parse(readMetroFile).DATA;
        next();
    } catch (error) {
        next(error);
    }
}

function openFileErr(err, req, res, next) {
    console.log(err);
    if (err.code == "ENOENT")
        res.status(500).json({ message: "there are no file" });
}

module.exports = { openFile, openFileErr };
