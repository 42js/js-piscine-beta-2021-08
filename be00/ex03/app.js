const express = require('express');
const app = express();
const fs = require('fs');
const port = 4242;
const dataname = "/seoul_metro_station.json";
let data;
try{
data = JSON.parse(fs.readFileSync(__dirname + dataname).toString());
}catch (e){
    
}

app.use(express.json()); 
app.use(express.urlencoded({ extended : true}));

app.get('/station/[A-Za-z]+(%20)[A-Za-z]+', (req, res) => {
    var done = req.url.split('/')[2].replace('%20', ' ');
    res.json(data.DATA.filter((e) => {
        return e.station_nm_eng === done;
    }));
});
app.get('/station/:name', (req, res, next) => {
    console.log(req.url);
    var done = data.DATA.filter((e) => {
        return e.station_nm === req.params.name
    });
    res.json(done);
}); 

app.post('/station/id', (req, res) => {
    if (req.body.fr_code)
        res.json(data.DATA.filter((e) => {
            return e.fr_code === req.body.fr_code;
        })); 
});
app.get('/line', (req, res) => {
    var num = "01호선";
    req.query.line_num ? num = req.query.line_num : num ;
    res.json(data.DATA.filter((e) => {
        return e.line_num === num;
    }));;
});
app.all('*', (req, res) => {
    res.status(404).json({err: "Not Found"})
});
app.use((err, req, res, next) => {
    if (err)
        res.status(500).json({err:'Internal Error'});
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
