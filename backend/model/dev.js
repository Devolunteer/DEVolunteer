'use strict'

let mongoose = require('mongoose')

//Dev user model
let devSchema = mongoose.Schema({

  username: {type: String, ref: 'users', unique: true},
  name: {type: String},

  city: {type: String},
  state: {type: String},
  phone: {type: String},
  email: {type: String},
  picture: {type: String},
  website: {type: String},
  // languages: [{type: String}],
  javascript: {type: String},
  html: {type: String},
  angular: {type: String},
  react: {type: String},
  python: {type: String},
  otherlang: {type: String},
  services: [{type: String}],  //i changed this to string from boolean to match languages.
  available: {type: Boolean},
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'reviews'}],
})


module.exports = mongoose.model('devs', devSchema)
