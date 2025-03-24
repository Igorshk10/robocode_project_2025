var express = require('express');
var router = express.Router();
var { createUser, authUser } = require('../model/UserRepo');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('registration');
});

/* router.post('/login', async function(req, res, next) {
  let {username, password} = req.body;
  let resp = await authUser(username, password);
  res.render('user', { username: resp.login});
});  */

module.exports = router;