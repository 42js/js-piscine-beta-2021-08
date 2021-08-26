const express = require('express');
const app = express();
const valid = require('./my_validator.js');
const port = 4242;

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(valid).post('/main', (req, res, next) => {
    res.sendStatus(200);
    res.end()
});
app.use((err, req, res, next) => {
    if (err){
        res.setStatus(500);
        res.json({err:'Internal Error'});
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
