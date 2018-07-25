const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const PollSchema = new Schema({
    question: String,
    answers: [{
        text: String,
        count: { type: Number, default: 0 }
    }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    voter: { type: String, default: "" }
});
module.exports = mongoose.model('Poll', PollSchema);
