var express = require('express');
var router = express.Router();
var authService = require('../services/authServuce');

router.get('/', function(req, res, next) {
    res.render('signin');
});

router.post('/login', async function(req, res, next) {
  await authService.auth(req, req.body.username, req.body.password);
  res.redirect('/main');
});

module.exports = router;