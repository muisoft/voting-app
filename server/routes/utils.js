
const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const Poll = require('mongoose').model('Poll');
const Answer = require('mongoose').model('Answer');
const passport = require('passport');

exports.savePoll = (req, res) => {
  let { question, answers } = req.body;

  const poll = new Poll({ question: question, answers: answers, owner: req.user._id });
  poll.save((err, poll) => {
    res.json({ status: "true" });
  });
}

exports.allPolls = (req, res) => {
  Poll.find({}, (err, polls) => {
    res.json({ polls: polls, user: req.user });
  })
}
exports.poll = (req, res) => {
  let { id } = req.body;

  Poll.findOne({ _id: id }, (err, poll) => {
    res.json(poll);
  })
}
exports.myPolls = (req, res) => {
  let { _id } = req.user;

  Poll.find({ owner: _id }, (err, polls) => {
    res.json(polls);
  })
}

exports.signup = (req, res) => {
  let { username, email, password } = req.body;

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

    res.json(poll);
  });
}
exports.updatePoll = (req, res) => {
  let { id, question, answers } = req.body;

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

  Poll.findOneAndRemove({ _id: id }, (pin) => {
    res.json({ success: true });
  });
}