const http = require('http');
const fs = require('fs');
const port = 4242;


function get(res) {
    fs.readFile(__dirname + '/data.json', {
        flag: 'a+'
    }, (err, data) => {
        try {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/html'
                });
                res.write(err.stack);
            } else {
                if (data.toString() == '')
                    fs.writeFile(__dirname + '/data.json', JSON.stringify({}), (err, data) => {
                        res.writeHead(200, {
                            'Content-Type': 'text/plain'
                        });
                        res.write('empty');
                        res.end();
                    })
                else {
                    JSON.parse(data.toString());
                    var done = data;
                    res.writeHead(200, {
                        'Content-Type': 'Application/json'
                    });
                    if (data.toString() == '{}') {
                        res.writeHead(200, {
                            'Content-Type': 'text/plain'
                        });
                        res.write('empty');
                    } else {
                        res.write(`{
                    "message": "Content retrieved successfully.",
                    "data": ${done}
                }`);
                    }
                    res.end();
                }
            }
        } catch (e) {
            console.log(e);
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.write(e.message);
            res.end();
        }
    });
}
async function post(req, res) {
    let reqdata = '';
    var time = new Date();
    req.on('data', chunk => {
        reqdata += chunk;
    })
    await req.on('end', () => {})
    var data_ = `{
      "${time.getTime()}": "${reqdata}"
  }`
    fs.readFile(__dirname + '/data.json', {
        flag: 'a+'
    }, (err, rdata) => {
        try {
            var addata = Object.assign(JSON.parse(rdata.toString()), JSON.parse(data_));
            fs.writeFile(__dirname + '/data.json', JSON.stringify(addata), (err, data) => {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/html'
                    });
                    res.write(err.message);
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'Application/json'
                    });
                    console.log(addata);
                    res.write(`{
                        "message": "Content added successfully.",
                        "edited_time": "${time.toISOString()}",
                        "data":${JSON.stringify(JSON.parse(data_))}
                    } 
                    `);
                }
                res.end();
            });
        } catch (e) {
            res.writeHead(500);
            res.write(e.message);
            res.end();
        }
    });
}
function del(res) {
    try {
        fs.readFile(__dirname + '/data.json', (err, data) => {
            if (err) {
                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });
                res.write(err.message);
                res.end();
            } else {
                data = JSON.stringify({});
                fs.writeFile(__dirname + "/data.json", data, (err, data) => {
                    res.writeHead(200, {
                        "Content-Type": "Application/json"
                    });
                    res.write(`{
                        "message": "Content deleted successfully."
                    }`);
                    res.end();
                });
            }
        });
    } catch (e) {
        res.writeHead(500, {
            "Content-Type": "text/plain"
        });
        res.write(e.message);
        res.end();
    }
}
const server = http.createServer((req, res) => {
    if (req.url == '/file') {
        if (req.method == 'GET') {
            get(res);
        } else if (req.method == 'POST') {
            post(req, res);
        } else if (req.method == 'DELETE') {
            del(res);
        }
    }
}).listen(port);
console.log(`Server running at http://localhost:${port}/`);