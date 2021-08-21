import React, { useState } from "react";
import axios from "axios";

const PersonList = () => {
  const [persons, setPersons] = useState([]);
  //   const apiKey = process.env.REACT_APP_NOTION_KEY;

  const componentDidMount = () => {
    axios.get("https://api.notion.com/api/v1/users").then((res) => {
      res.headers("Access-Control-Allow-Origin", "*");
      setPersons([res.data]);
    });
  };

  componentDidMount();
  persons.map((person) => console.log(person.id));

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};

export default PersonList;
