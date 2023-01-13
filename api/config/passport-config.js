const { User } = require('../models')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback",
    passReqToCallback: true
},
    async (request, accessToken, refreshToken, profile, done) => {
        console.log(profile);
        let user = await User.findOne({ where: { name: profile._json.name } });



        // If user is not found, create a new one
        if (!user) {

            const newUser = await User.create({
                name: profile._json.name
            })

            return done(null, newUser);
        } else {
            return done(null, user);
        }
    }

));

passport.serializeUser((user, done) => {
    done(null, user.name);
});

passport.deserializeUser(async (name, done) => {
    let user = await User.findOne({ where: { name: name } });
    done(null, user);
});