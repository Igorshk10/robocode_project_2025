var express = require('express');
var router = express.Router();
var authService = require('../services/authServuce');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('registration', { error: null });
});


router.post('/registr', async function(req, res, next) {
  try{
    await authService.createUser(req.body.username.toLocaleLowerCase().trim(), req.body.password, req.body.email, req.body.monthlyBudget);
    await authService.auth(req, req.body.username.toLocaleLowerCase().trim(), req.body.password, req.body.email, req.body.monthlyBudget);
    res.redirect('/main');
  } catch (error) {
    res.render('registration', { error: error.message });
  }

}); 

//let {username, password , email , monthlyBudget} = req.body;
//let resp = await UserRepository.createUser(username, password, email , monthlyBudget);


module.exports = router;