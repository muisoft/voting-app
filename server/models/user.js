const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: { type: String, default: "" },
    username: String,
    email: String,
    password: String,
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    twitter: {
        twitterId: { type: String, required: false },
    },
    photo: []
});

module.exports = mongoose.model('User', UserSchema);
