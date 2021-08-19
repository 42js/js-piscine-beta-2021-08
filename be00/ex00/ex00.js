require('http').createServer(function (req, res) { // request, response
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<h1>안녕, Node.js!</h1>')
}).listen(4242, function () {
    console.log('Server Running at http://localhost:4242')
})