
//재작성 필요

const axios = require('axios');
const githubpath = "https://api.github.com/repos";
const path = githubpath + "/blbbyk/42/issues"

async function getIssue(req, res) {

    const headers = {
        Authorization: `token ${req.headers.key}`,
    };
    const params = {
    
    }
    try{
        const response = await axios.post(path, params, {headers});
        console.log(response.data);
        res.status(200);
        res.send(response.data);
        res.end();
    }
    catch (e) {
        console.log(e);
        console.log(e.response.status);
        res.status(e.status.status);
        res.end();
    }
}

module.exports = getIssue;