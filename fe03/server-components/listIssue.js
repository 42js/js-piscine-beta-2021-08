
const axios = require('axios');
const githubpath = "https://api.github.com/repos";
const path = githubpath + "/blbbyk/42/issues"

async function listIssue(req, res) {
    
    const headers = {
        Authorization: `token ${req.headers.key}`,
    };

    try{
        const response = await axios.get(path, {headers});
        console.log(response.data.size);
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

module.exports = listIssue;