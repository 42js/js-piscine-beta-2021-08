// const fs = require("fs"); // 파일 읽고 쓰는 모듈
// const http = require("http");

// const PORT = 4242;

// let fileMethod = {};

// fileMethod["GET"] = (req, res) => {
//   try {
//     res.writeHead(200, {
//       "Content-Type": "application/json; charset=utf-8",
//     });
//     let get = JSON.parse(fs.readFileSync("./data.json"));
//     if (JSON.stringify(get) === "{}") {
//       res.end("empty");
//       return;
//     }
//     get.message = "Content retrieved successfully.";
//     fs.writeFile("./data.json", JSON.stringify(get), (err) => {});
//     res.end(JSON.stringify(get));
//   } catch {
//     res.writeHead(500);
//     res.end("Can't read/write data file");
//   }
// };

// fileMethod["POST"] = (req, res) => {
//   let body = "";
//   req.on("data", (data) => {
//     body += data;
//   });
//   req.on("end", () => {
//     try {
//       res.writeHead(200, {
//         "Content-Type": "application/json; charset=utf-8",
//       });
//       let get = JSON.parse(fs.readFileSync("./data.json"));
//       get.message = "Content added successfully.";
//       get.edited_time = new Date().toISOString();
//       if (!get.data) get.data = {};
//       get.data[Date.now()] = body;
//       fs.writeFile("./data.json", JSON.stringify(get), (err) => {});
//       res.end(JSON.stringify(get));
//     } catch {
//       res.writeHead(500);
//       res.end("Can't read/write data file");
//     }
//   });
// };

// fileMethod["DELETE"] = (req, res) => {
//   try {
//     res.writeHead(200, { "Content-Type": "application/JSON; charset=utf-8" });
//     let get = {};
//     get.message = "Content deleted successfully.";
//     fs.writeFile("./data.json", JSON.stringify(get), (err) => {});
//     res.end(JSON.stringify(get));
//   } catch {
//     res.writeHead(500);
//     res.end("Can't read/write data file");
//   }
// };

// function send500Message(res, err) {
//   res.statusCode = 500;
//   res.send500Message(String(err));
//   console.log(err);
// }

// function onRequest(req, res) {
//   if (req.url === "/file") {
//     if (fileMethod[req.method]) fileMethod[req.method](req, res);
//   } else {
//     res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
//     res.end("index");
//   }
// }

// http.createServer(onRequest).listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

// fs.readdir("./", (err, list) => {
//   if (list.indexOf("data.json") === -1) {
//     fs.writeFile("./data.json", "{}", (err) => {});
//   }
// });
