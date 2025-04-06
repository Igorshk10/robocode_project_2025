var express = require('express');
var router = express.Router();
var UserService = require('../services/userService');

router.get('/', async function(req, res, next) {
    const user_username = req.session.user.username;
    const user_monthlyBudget = req.session.user.monthlyBudget;
    const date_of_registration = req.session.user.date_of_registration;
    console.log(user_monthlyBudget);
    res.render('profile', { username: user_username , monthlyBudget: user_monthlyBudget, date_of_registration: date_of_registration, error: null });
});


router.post('/newusername', async function(req, res, next) {
    const userId = req.session.user.id;
    console.log(userId);
    try{
        await UserService.updateUsername( req.body.newusername.toLocaleLowerCase().trim(), req.body.password , userId);
        req.session.user.username = req.body.newusername.toLocaleLowerCase().trim();
        res.redirect('/profile');
    } catch (error) {
        res.render('profile', { error: error.message });
    }

});

router.post('/newmonthlybudget', async function(req, res, next) {
    const userId = req.session.user.id;
    try{
        await UserService.updateMonthlyBudget( req.body.newMonthlyBudget, req.body.password , userId);
        req.session.user.monthlyBudget = req.body.newMonthlyBudget
        console.log('Updated budget in session:', req.session.user.monthlybudget);
        res.redirect('/profile');
    } catch (error) {
        res.render('profile', { error: error.message });
    }

});


router.get("/logout", async (req, res) => {
    try {
        const result = await authService.logout(req);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

