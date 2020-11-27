/* import express from 'express' 
makes use of es 2015 modules which is not supported by nodejs so in the backend part we will make use of below format that is common js modules(only in server side).*/

const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) =>
        {
            console.log('access Token', accessToken);
            console.log('refresh Token', refreshToken);
            console.log('profile:', profile);
        }
    )
);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

//Dynamic Port Binding using Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);