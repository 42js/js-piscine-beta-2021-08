const express = require('express');
const cors = require('cors');
const { Client } = require("@notionhq/client");

require('dotenv').config();

const app = express();
const port = 4000;

app
  .use(cors())
  .get('', (req, res) => {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,

    });
    (async () => {
      try {
        const list = await notion.databases.query({
          database_id: process.env.NOTION_DATABASE
        })
        res.status(200).send(list);
      } catch (err) {
        res.status(500).send(`${err}`);
      }
    })();
  })
  .all('*', (req, res) => {
    res.status(404).send('Not found');
  });


app.listen(port);