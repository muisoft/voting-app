const mongoose = require('mongoose');
//mongoose.connect(process.env.DB_CONN);//'mongodb://localhost:27017/booktrading');

const AnswerSchema = new mongoose.Schema({
    text: String,
    count: { type: Number, default: 0 }
});
module.exports = mongoose.model('Answer', AnswerSchema);