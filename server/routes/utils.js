const bCrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const Poll = require('mongoose').model('Poll');
const Answer = require('mongoose').model('Answer');
const passport = require('passport');

/**export const isCurrectPassword = (user, password) => {
  return bCrypt.compareSync(password, user.password);
}

export const createHash = (password) => {
  return bCrypt.hashSync(password, genSaltSync(10), null);
}**/

exports.savePoll = (req, res) => {
  let { question, answers } = req.body;
  console.log('New Poll: ' + JSON.stringify(req.body));
  const poll = new Poll({ question: question, answers: answers, owner: req.user._id });
  poll.save((err, poll) => {
    res.json({ status: "true" });
  });
}

exports.allPolls = function (req, res) {
  Poll.find({}, (err, polls) => {
    console.log('Books: ' + polls);
    console.log('All: ' + JSON.stringify(req.user));
    res.json({ polls: polls, user: req.user });
  })
}

exports.myPolls = (req, res) => {
  var { _id } = req.user;
  console.log('Yewo: ' + JSON.stringify(req.user));
  Poll.find({ owner: _id }, (err, polls) => {
    console.log('Yewo: ' + JSON.stringify(polls));
    res.json(polls);
  })
}

exports.signup = (req, res) => {
  var { username, email, password } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (user) {
      console.log('Username already exists');
      res.json({ message: 'Username already exists' })
    } else {
      let newUser = new User({ username, email, password });
      newUser.save((err, user) => {
        res.json(user);
      });
    }
  })
}
exports.submitVote = (req, res) => {
  let { id, answer, voter } = req.body;
  Poll.findOne({ 'answers._id': answer.id }, (err, poll) => {
    poll.answers.forEach(ans => {
      if (ans.text === answer.text) {
        ans.count = ans.count + 1;
      }
    })
    poll.voter = voter;
    poll.save();
    console.log('Submit Poll: ' + JSON.stringify(poll));
    res.json(poll);
  });
}
exports.updatePoll = (req, res) => {
  let { id, question, answers } = req.body;
  
  console.log('Update Poll: ' + JSON.stringify(req.body));
  //console.log('New Answers: ' + JSON.stringify(newAnswers));
  Poll.findOneAndUpdate(
    { _id: id },
    { answers: answers },
    { upsert: 'true' },
    (err, poll) => {
      if (err) throw err;
      res.json({ status: true });
    });

}
exports.deletePoll = (req, res) => {
  let { id } = req.body;
  console.log('Delete Id: ' + JSON.stringify(id));
  Poll.findOneAndRemove({ _id: id }, (pin) => {
    res.json({ success: true });
  });
}
/**
export const ratePics = (req, res) => {
  let { id, rate } = req.body;

  Pin.findOneAndUpdate({ _id: id }, { rate: rate }, (pin) => {
    Pin.find({}, (err, pins) => {
      res.json(pins);
    })
  })
}**/
