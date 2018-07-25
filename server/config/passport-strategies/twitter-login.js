require('dotenv').config();
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('mongoose').model('User');

module.exports = () => {
    passport.use(new TwitterStrategy({
        consumerKey: process.env.TWITTER_API_KEY,
        consumerSecret: process.env.TWITTER_API_SECRET,
        callbackURL: process.env.APP_BASE_URL + '/auth/twitter/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOneAndUpdate(
            { 'twitter.twitterId': profile.id },
            {
                'twitter.twitterId': profile.id,
                username: profile.username,
                password: profile.id // We create password for User in order for him to be able to signin locally
            },
            { upsert: 'true' })
            .exec((err, user) => {
                if (err) return done(err);
                if (user) {
                    return done(null, user);
                } else {
                    done(null, false);
                }
            })
    }));
}
