const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', isNotAuthenticated, (req, res, next) => {
    res.render('index');
});

router.get('/signup', isNotAuthenticated, (req, res, next) => {
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.get('/login', isNotAuthenticated, (req, res, next) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
})

router.get('/profile', isAuthenticated, (req, res, next) => {
    res.render('profile');
});

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function isNotAuthenticated(req, res, next) {
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/profile');
}

module.exports = router;