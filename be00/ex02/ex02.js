const http = require('http');
const fs = require('fs');

function get500(response, err) {
    response.statusCode = 500;
    response.end(err);
    console.log(err);
}

const server = http.createServer((request, response) => {
    try {
        if (request.url == '/file' && request.method == 'GET') {
            fs.readFile('./data.json', (err, data) => {
                if (err) {
                    if (err.code == 'ENOENT') {
                        fs.writeFile('data.json', '{\n}\n', (err) => {
                            if (err) throw err;
                        });
                        response.setHeader('Content-type', 'text/plain')
                        response.end('empty');
                    }
                }
                else {
                    data = JSON.parse(data);
                    if (Object.keys(data).length == 0) {
                        response.setHeader('Content-type', 'text/plain')
                        response.end('empty');
                    }
                    else {
                        try {
                            const attribute = {
                                "message": "Content retrieved successfully.",
                                data
                            }
                            response.setHeader('Content-type', 'application/json');
                            response.end(JSON.stringify(attribute));
                        }
                        catch (e) {
                            response.statusCode = 500;
                            response.end(e);
                            console.log(e);
                        }
                    }
                }
            })
        }
        else if (request.url == '/file' && request.method == 'POST') {
            fs.readFile('./data.json', (err, data) => {
                if (err) get500(request, err);
                else {
                    data = JSON.parse(data);
                    let time = new Date();
                    data[time.getTime()] = 'hello';
                    const attribute = {
                        "message": "Content retrieved successfully.",
                        "edited_time": time,
                        data
                    }
                    response.setHeader('Content-type', 'application/json');
                    response.end(JSON.stringify(attribute));
                }
            })
        }
        else if (request.url == '/file' && request.method == 'DELETE') {
            fs.readFile('./data.json', (err, data) => {
                if (err) get500(request, err);
                else {
                    fs.writeFile('data.json', '{\n}\n', (err) => {
                        if (err) throw err;
                        else {
                            const attribute = {
                                "message": "Content retrieved successfully.",
                            }
                            response.setHeader('Content-type', 'application/json');
                            response.end(JSON.stringify(attribute));
                        }
                    });
                }
            })
        }
    }
    catch (e) {
        response.statusCode = 500;
        response.end(e);
        console.log(e);
    }
});

server.listen(4242, function() {
    console.log("Server running at http://localhost:4242/");
})
