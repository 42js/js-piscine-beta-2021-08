var express = require('express');
var router = express.Router();
const { Client } = require("@notionhq/client");
/* GET home page. */
router.get('/', function(req, res, next) {
  const notion = new Client({
    auth: 'secret_du5aohxokedsyRy3cCVt3vJYsuSDaervcFkMAp0DVmB',
  });
  ;(async () => {
    const listUsersResponse = await notion.users.list()
    res.json(listUsersResponse['results'])
  })()
});

module.exports = router;
