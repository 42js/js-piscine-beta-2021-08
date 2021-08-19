require('http').createServer(function(request, response){
		response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })	// text/plain -> text형식
		response.end('안녕, Node.js!');
		//console.log(response);
}).listen(4242, function () {
	console.log('Server running at http://localhost:4242/')	
})
