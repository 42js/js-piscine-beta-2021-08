const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Welcome Seoul!'));

app.get('/station')
fs.readFile('./seoul_metro_station.js', (err, data) => {
    try {
        if (err) {
            
        }
    }
    catch (e) {

    }
});

if (app.get('/station'))
app.listen(4242, () => console.log('localhost'));