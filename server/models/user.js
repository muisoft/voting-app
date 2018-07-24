const  mongoose = require('mongoose');
const bCrypt = require('bcrypt-nodejs');

//mongoose.connect('mongodb://localhost:27017/booktrading');

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

/**UserSchema.methods = {
    isCurrectPassword: (user, password) => {
        return bCrypt.compareSync(password, this.password);
    },
    createHash: (password) => {
        return bCrypt.hashSync(password, genSaltSync(10), null);
    }
}**/
module.exports = mongoose.model('User', UserSchema);
