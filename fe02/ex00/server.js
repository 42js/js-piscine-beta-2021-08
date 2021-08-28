const cors = require('cors');
const express = require ('express');
const app = express();
const axios = require('axios');
const pageId = "fcb39d41de084468b504cbca15ce92a2";
// const key = "secret_vn5rc99df6ldJEADI8j1lrVt9wVdcJBFxqcQiJPBayF";

async function queryAllUsers(req, res) {
   const path = "https://api.notion.com/v1/users"
    try {
        let result = await axios({
            url : path,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${req.headers.key}`,
                "Notion-Version" : "2021-08-16",
            }
        })
        console.log("Success : queryAllUsers");
        res.status(200);
        res.set("Content-type", "application/json");
        res.send({result : result.data.results});
        res.end();
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.end();
    }

    
}
function main()
{
    let corsOptions = {
        origin: "http://localhost:3000"
    };
    app.use(express.json());
    app.use('/', cors(corsOptions));
    app.get('/users', queryAllUsers)
    app.listen(4242, ()=>{console.log("server is running")});
}
main();