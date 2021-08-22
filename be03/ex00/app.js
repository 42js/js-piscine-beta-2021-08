const express = require('express');
const app = express();

const port = 4242;

// respond with "hello world" when a GET request is made to the homepage
app.post('/sign_in', function(req, res) {
  res.send('hello world');
});

app.post('/sign_out', function(req, res) {
	res.send('hello world');
  });

app.post('/sing_up', function(req, res) {
	res.send('hello world');
});

app.post('/change_password', function(req, res) {
	res.send('hello world');
});

app.listen(port, ()=>{
	console.log("server on")
});