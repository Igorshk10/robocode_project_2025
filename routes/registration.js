var express = require('express');
var router = express.Router();
var { createUser, authUser } = require('../model/UserRepo');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('registration');
});


router.post('/registr', async function(req, res, next) {
  let {username, password , email , monthlyBudget} = req.body;
  let resp = await createUser(username, password, email , monthlyBudget);
  res.redirect('/main');
}); 



module.exports = router;