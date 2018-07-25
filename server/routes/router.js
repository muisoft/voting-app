const express = require('express');
const passport = require('passport');
const User = require('mongoose').model('User');
const Poll = require('mongoose').model('Poll');
const { allPolls, myPolls, savePoll, poll, signup, submitVote, updatePoll, deletePoll } = require('./utils');

var router = express.Router();

const redir = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3001/';

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect(redir);
  }
}

router.get('/signout', (req, res) => {
  req.logout();
  res.json({ success: true });
});

router.get('/auth/twitter', (req, res, next) => {
  return passport.authenticate('twitter')(req, res, next);
});

router.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureredirect: redir + 'account/login' }),
  (req, res) => {
    res.redirect(redir)
  });

router.post('/signin', (req, res, next) => {
  return passport.authenticate('local-signin', (err, user) => {
    req.logIn(user, err => {
      return res.json(user);
    })

  })(req, res, next);
});

router.post('/signup', (req, res) => {
  signup(req, res);
});

router.get('/allpolls', (req, res) => {
  allPolls(req, res);
});

router.post('/poll', (req, res) => {
  poll(req, res);
});

router.get('/poll/:poll', (req, res, next) => {
  Poll.findOne({ _id: req.params.poll }, (err, poll) => {
    res.redirect(redir + 'poll/' + req.params.poll);
  });
});

router.get('/mypolls', isLoggedIn, (req, res) => {
  myPolls(req, res);
});

router.post('/savepoll', isLoggedIn, (req, res) => {
  savePoll(req, res);
});

router.post('/submitvote', (req, res) => {
  submitVote(req, res);
});

router.post('/updatepoll', isLoggedIn, (req, res) => {
  updatePoll(req, res);
});

router.post('/deletepoll', isLoggedIn, (req, res) => {
  deletePoll(req, res);
});

module.exports = router;