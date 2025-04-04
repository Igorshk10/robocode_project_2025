var express = require('express');
var router = express.Router();
var authService = require('../services/authServuce');

router.get('/', function(req, res, next) {
    res.render('signin' , { error: null });
});

router.post('/login', async function(req, res, next) {
  try{
    await authService.auth(req, req.body.username.toLocaleLowerCase().trim(), req.body.password);
    res.redirect('/main');
  } catch (error) {
    res.render('signin', { error: error.message });
  }

});

module.exports = router;