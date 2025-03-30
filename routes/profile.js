var express = require('express');
var router = express.Router();
var UserService = require('../services/userService');

router.get('/', async function(req, res, next) {
    const user_username = req.session.user.username;
    const user_monthlyBudget = req.session.user.monthlyBudget;
    res.render('profile', { username: user_username , monthlyBudget: user_monthlyBudget});
});


router.post('/newusername', async function(req, res, next) {
    const userId = req.session.user.id;
    await UserService.updateUsername( req.body.newusername, req.body.password , userId);
    res.redirect('/profile');
});

module.exports = router;

