import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Client } from '@notionhq/client';

function App() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const axiosTest = () => {
    axios
      .get(notion.baseURL)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axiosTest();
  });

  return <p>hello</p>;
}

export default App;
