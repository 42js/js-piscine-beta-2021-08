import React from 'react';
import './ReqPage.css';
import Header from '../components/Header';

function ReqPage ({setRepo}) {
    return (
        <div id="body">
            <Header></Header>
            <div className="inputbox">
                <input id="userinput" type="text"></input>
                <input id="userbutton" type="button" value="GO" onClick={setRepo}></input>
            </div>
        </div>
    );
}

export default ReqPage;