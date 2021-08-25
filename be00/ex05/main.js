const express = require('express');
const http = require('http');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.listen(4242, () => {
    console.log('Server running at http://localhost:4242/');
});

app.get("/", (req, res) => {

});

app.get("/breeds", (req, res) => {

});

app.get("/breeds/:name", (req, res) => {

});

http.request({}, (res) => {

}).end();