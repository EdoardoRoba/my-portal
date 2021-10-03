const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
passport.use(new FacebookStrategy({
    clientID: "591828825276395",
    clientSecret: "2c85fb3fe70c431e3293be1d277cbfee",
    callbackURL: "http://localhost:8000/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));