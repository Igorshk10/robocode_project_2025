var express = require('express');
var router = express.Router();
var UserRepository = require('../model/UserRepo');

router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*

router.post('/register',  async function(req, res, next) {
  let {username, password} = req.body;
  await createUser(username, password);
  res.send('User created');
}); 

router.post('/login', async function(req, res, next) {
  let {username, password} = req.body;
  let resp = await authUser(username, password);
  res.render('user', { username: resp.login});
}); */

module.exports = router;