var express = require('express');
var router = express.Router();
var { createUser, authUser } = require('../model/UserRepo');

router.get('/', function(req, res, next) {
    res.render('login');
});

/* router.post('/login', async function(req, res, next) {
  let {username, password} = req.body;
  let resp = await authUser(username, password);
  res.render('user', { username: resp.login});
});  */

module.exports = router;