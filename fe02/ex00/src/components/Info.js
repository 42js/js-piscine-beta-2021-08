import React , {useState, useEffect} from 'react';
import axios from 'axios';
import {Client} from '@notionhq/client';
const notion = new Client({auth : "secret_vn5rc99df6ldJEADI8j1lrVt9wVdcJBFxqcQiJPBayF"});
const pageId = "fcb39d41de084468b504cbca15ce92a2";
const key = "secret_vn5rc99df6ldJEADI8j1lrVt9wVdcJBFxqcQiJPBayF";

async function getAllUsers(text) {
    const path = "/" + pageId;
    try {
        const response = await axios({
            url : "http://localhost:4242/users",
            method: 'get',
            headers : {
                "key" : key,
            } 
        })
        console.log(response.data.result);
        return (response.data.result);
    }
    catch (err) {
        console.error(err);
    }
    
}


const Info = ()=> {

    const [users, setUsers] = useState([{}]);
    

    useEffect(()=>{
        getAllUsers()
            .then(res=>setUsers(res))
            .catch(console.error);
        }, []);
    
    return (
        <div>
            <input type="button" value="click" onClick={getAllUsers}/>
            <h1>Users</h1>
                {users.map(one =>(
                    <ul>
                        <li>id : {one.id}</li>
                        <li>type : {one.type} </li>
                        <li>email : {one.person.email}</li>
                        <image></image>
                    </ul>
                    ))}
                ))
        </div>
    )
}

export default Info;