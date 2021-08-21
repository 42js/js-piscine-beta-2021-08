import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Client } from '@notionhq/client';

function App() {
  const notion = new Client({
    auth: process.env.REACT_APP_NOTION_TOKEN,
    notionVersion: '2021-08-17',
  });

  const databaseId = process.env.REACT_APP_NOTION_DATABASE_ID;

  console.log(notion);
  console.log(databaseId);

  const axiosTest = () => {
    axios({
      baseURL: `https://api.notion.com/v1/pages/${process.env.REACT_APP_NOTION_DATABASE_ID}`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axiosTest();
  });

  return <p>hello</p>;
}

export default App;
