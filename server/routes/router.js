const express = require('express');
const passport = require('passport');
const User = require('mongoose').model('User');
const Poll = require('mongoose').model('Poll');
const { allPolls, myPolls, savePoll, signup, submitVote, updatePoll, deletePoll } = require('./utils');
/**import {
    signup,
    savePics, allPics,
    myPics,
    deletePics,
    ratePics
} from './utils';
**/
var router = express.Router();

const redir = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/';

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  } else {
    res.redirect(redir);
  }
}

router.get('/signout', (req, res) => {
    req.logout();
    res.json({ success: true});
})

router.get('/auth/github', (req, res, next) => {
  return passport.authenticate('github')(req, res, next);
})

router.get("/auth/github/callback", (req, res, next) => {
  return passport.authenticate('github', {
    successRedirect: redir,
    failureRedirect: redir + 'account/login'
  })(req, res, next);
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
})
router.get('/allpolls', (req, res) => {
  console.log('All Polls');
  //allBooks(req, res);
  Poll.find({}, (err, polls) => {
    console.log('Books: '+polls);
    res.json(polls);
  })
});

router.get('/mypolls', isLoggedIn, (req, res) => {
 myPolls(req, res);
});
router.post('/savepoll', isLoggedIn, (req, res) => {
  console.log('enter save');
  savePoll(req, res);
});
router.post('/submitvote', (req, res) => {
  console.log('enter submitvote');
  submitVote(req, res);
});
router.post('/updatepoll', isLoggedIn, (req, res) => {
  console.log('enter update');
  updatePoll(req, res);
});
router.post('/deletepoll', isLoggedIn, (req, res) => {
  deletePoll(req, res);
});
/**
router.post('/ratepics', isLoggedIn, (req, res) => {
  ratePics(req, res);
}); **/
module.exports = router;
