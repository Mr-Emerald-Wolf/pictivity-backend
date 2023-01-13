const express = require('express')
const passport = require('passport')
const router = express.Router()
require('../config/passport-config')

router.get('/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    })
)

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


router.get('/logout', (req, res, next) => {
    req.logout( (err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});


module.exports = router