require('dotenv').config()
var express = require('express');
var router = express.Router();
const { Client } = require("@notionhq/client");
/* GET home page. */
router.get('/', function(req, res, next) {
  const notion = new Client({
    auth: process.env.SECRET,
  });
  ;(async () => {
    const listUsersResponse = await notion.users.list()
    res.json(listUsersResponse['results'])
  })()
});

module.exports = router;
