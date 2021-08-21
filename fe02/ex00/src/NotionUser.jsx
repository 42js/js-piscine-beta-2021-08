import axios from "axios";
import React, { useEffect, useState } from "react";
import { listUsers } from "./notion";

const User = ({ name, email, type, imgUrl }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{type}</div>
      <img src={imgUrl} alt="avator" />
    </div>
  );
};

const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/users";

require("dotenv").config();
const token = process.env.REACT_APP_NOTION_TOKEN;
console.log(token);
console.log(process.env.REACT_APP_NOTION_TOKEN); //YOU_API_KEY
console.log(process.env.REACT_APP_NOTION_ID); //undefind

const NotionUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const users = listUsers();
    // setUsers(Array(users));
    // console.log(users);
    axios
      .get(baseUrl, {
        headers: {
          Authorization: token,
          "Notion-Version": "2021-05-13",
        },
      })
      .then((res) => {
        console.log(res);
        setUsers(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <User
            name={user.name}
            email={user.email}
            type={user.type}
            imgUrl={user.avatar_url}
          />
        );
      })}
    </div>
  );
};

export default NotionUser;
