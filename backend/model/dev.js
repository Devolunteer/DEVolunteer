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
  languages: [{type: String}],
  services: [{type: Boolean}],
  available: {type: Boolean},
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'reviews'}],
})


module.exports = mongoose.model('devs', devSchema)
