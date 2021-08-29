import React from 'react';
import axios from 'axios';
const realpath = "https://api.github.com/repos/blbbyk/42/issues/"
const key = "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";

function sendCreate(e){

    const path = "http://localhost:4242/issue?" + realpath;
    const params = {
        title : "다시시작",
        body : "여기는 내용이 들어가야지"
    };
    const headers = {
        Authorization: `token ${key}`,
    }
    axios.post(path, params, {headers})
        .then(res=>{console.log("suc")})
        .catch(console.log);      
}
function sendList(e){

    const path = "http://localhost:4242/issue?" + realpath;
    const headers = {
        Authorization: `token ${key}`,
    }
    axios.get(path, {headers})
        .then(res=>{console.log("suc")})
        .catch(console.log);      
}

function sendUpdate(e) {
    const path = "http://localhost:4242/issue?" + realpath + "10";
    const headers = {
        Authorization: `token ${key}`,
    }
    const params = {
        title : "이름 바꿀게요",
        body : "여기는 내용이 들어가야지"
    };
    axios.patch(path, params, {headers})
        .then(res=>{console.log("suc")})
        .catch(console.log);
}


function Info() {
    return (
        <div>
            <h1>Test button</h1>
            <input type="button" value="create issue" onClick={sendCreate}></input>
            <input type="button" value="list issue" onClick={sendList}></input>
            <input type="button" value="update issue" onClick={sendUpdate}></input>
          
        </div>
    );
}

export default Info;