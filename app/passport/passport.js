var FacebookStrategy = require('passport-facebook').Strategy;
module.exports = function(app,passport) {
    passport.use(new FacebookStrategy({
            clientID: FACEBOOK_APP_ID,
            clientSecret: FACEBOOK_APP_SECRET,
            callbackURL: "http://www.example.com/auth/facebook/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            User.findOrCreate(..., function(err, user) {
                if (err) { return done(err); }
                done(null, user);
            });
        }
    ));
}