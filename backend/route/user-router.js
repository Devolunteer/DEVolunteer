'use strict';

let Router = require('express').Router
let bearerAuth = require('../lib/bearer-auth-midd.js')
let basicAuth = require('../lib/basic-auth-midd.js')
// let createError = require('http-errors')
let User = require('../model/user')
let jsonParser = require('body-parser').json()

let router = module.exports = new Router()


//  Unauth Route
router.get('/api/users',(req, res) => {
  User.find({})
  .then(user => {
    console.log(user);
    return user.map(function(user) {
      return user._id;
    });
  })
  .then(user => {
    res.json(user);
  });
});
