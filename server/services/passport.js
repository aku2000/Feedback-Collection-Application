const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//mongoose model instance-user is turned into id and stored in cookies
passport.serializeUser((user, done) =>
{
    done(null, user.id);
});

//id is searched and returns user(model instance)
passport.deserializeUser((id, done) =>
{
    User.findById(id)
        .then(user =>
        {
            done(null, user);
        })
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) =>
        {
            User.findOne({ googleId: profile.id }).then((existingUser) =>
            {
                if (existingUser)
                {
                    done(null, existingUser);
                }
                else
                {
                    //create mongo model instance aka new record
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            })
        }
    )
);