
const axios = require('axios');
const githubpath = "https://api.github.com/repos";
const path = githubpath + "/blbbyk/42/issues"

async function createIssue(req, res) {

    const headers = {
        Authorization: `token ${req.headers.key}`,
    };
    const params = {
        title : req.body.title,
        body : req.body.body,
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

module.exports = createIssue;