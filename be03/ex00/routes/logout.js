var express = require('express');
var router = express.Router()
/**
 * @swagger
 *  /logout:
 *    post:
 *      tags:
 *      - logout
 *      description: logout
 *      responses:
 *       200:
 *        description: 로그아웃 성공
 */
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.append(
        "Set-Cookie", `jwt=0 Expires=${new Date(Date.now()).toISOString()};`
    );
    res.json({msg:"done"});
});

module.exports = router;
