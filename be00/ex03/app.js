import express, { json } from "express";
import * as fs from "fs";

const app = express();
const metroJSON = JSON.parse(fs.readFileSync("./seoul_metro_station.json"));

const findStation_nm = (name) => {
  for (var i = 0; i < metroJSON.DATA.length; i++) {
    if (metroJSON.DATA[i].station_nm == name) return metroJSON.DATA[i];
  }
  return null;
};

const findStation_nm_eng = (name) => {
  for (var i = 0; i < metroJSON.DATA.length; i++) {
    if (metroJSON.DATA[i].station_nm_eng == name) return metroJSON.DATA[i];
  }
  return null;
};

const findLine_num = (line) => {
  const ret = [];
  for (var i = 0; i < metroJSON.DATA.length; i++) {
    if (metroJSON.DATA[i].line_num == line) ret.push(metroJSON.DATA[i]);
  }
  return ret;
};

const findFr_code = (code) => {
  for (var i = 0; i < metroJSON.DATA.length; i++) {
    if (metroJSON.DATA[i].fr_code == code) return metroJSON.DATA[i];
  }
  return null;
};

app.get("/station/:name", (request, response) => {
  var station = findStation_nm(request.params.name);
  if (!station) station = findStation_nm_eng(request.params.name);
  if (!station) {
    response.status(500);
    response.send("error");
    return;
  }
  response.status(200);
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.send(JSON.stringify(station));
});

app.get("/line", (request, response) => {
  var ret;
  if (!request.query.line_num) ret = findLine_num("01호선");
  else ret = findLine_num(request.query.line_num);
  response.status(200);
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.send(JSON.stringify(ret));
});

app.post("/station/id", (request, response) => {
  var body = "";
  request.on("data", (data) => {
    body += data;
  });
  request.on("end", () => {
    const data = JSON.parse(body);
    if (!data.fr_code) {
      response.status(500);
      response.send("error");
      return;
    }
    const ret = findFr_code(data.fr_code);
    if (!ret) {
      response.status(500);
      response.send("error");
      return;
    }
    response.status(200);
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.send(JSON.stringify(ret));
  });
});

app.listen(4242, () => {
  console.log("Server running at http://localhost:4242/");
});
