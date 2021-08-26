const express = require('express');
const app = express();
const fetchRandomImage = require('./index');

app.set('views', './views');
app.set('view engine', 'pug');

app.listen(4242, () => {
    console.log('Server running at http://localhost:4242/');
});

app.get("/", (req, res) => {
    fetchRandomImage()
    .then((imgSrc) => {
        res.render("index", {
            scriptSrc: imgSrc
        });
        res.writeHead(200);
    })
});

app.get("/breeds", (req, res) => {

});

app.get("/breeds/:name", (req, res) => {

});

