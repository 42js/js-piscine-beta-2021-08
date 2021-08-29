const cors = require('cors');
const express = require ('express');
const app = express();
const axios = require('axios');

const githubpath = "https://api.github.com/repos";
const path = githubpath + "/blbbyk/42/issues"

const createIssue = require('./server-components/createIssue');
const getIssue = require('./server-components/getIssue');
const listIssue = require('./server-components/listIssue');
const e = require('cors');

async function getProc(req, res) { 

    const path = req.url.split('?')[1];
    const body = req.body;
    const headers = {
        authorization  : req.headers.authorization,
    };

    try{
        const response = await axios.get(path, {headers});
        console.log(response.data);
        res.status(200);
        res.send(response.data);
        res.end();
    }
    catch (e) {
        console.log(e);
        console.log(e.response.status);
        res.status(e.response.status);
        res.end();
    }    
}
async function postProc(req, res){

    const path = req.url.split('?')[1];
    const headers = {
        authorization  : req.headers.authorization,
    };

    try{
        const response = await axios.post(path, req.body, {headers});
        console.log(response.data);
        res.status(200);
        res.send(response.data);
        res.end();
    }
    catch (e) {
        console.log(e);
        console.log(e.response.status);
        res.status(e.response.status);
        res.end();
    }
}

async function patchProc(req, res){

    const path = req.url.split('?')[1];
    const headers = {
        authorization  : req.headers.authorization,
    };

    try{
        const response = await axios.post(path, req.body, {headers});
        console.log(response.data);
        res.status(200);
        res.send(response.data);
        res.end();
    }
    catch (e) {
        console.log(e);
        console.log(e.response.status);
        res.status(e.response.status);
        res.end();
    }
}

function main()
{
    let corsOptions = {
        origin: "http://localhost:3000"
    };
    app.use(express.json());
    app.use('/issue', cors(corsOptions));
    app.post('/issue', postProc);
    app.get('/issue', getProc);
    app.patch('/issue', patchProc);
  
    app.listen(4242, ()=>{console.log("server is running")});
}
main();