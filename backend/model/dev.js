'use strict'

let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
let createError = require('http-errors')
let jwt = require('jsonwebtoken')

//Dev user model
let devSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  city: {type: String},
  state: {type: String},
  phone: {type: String},
  email: {type: String},
  picture: {type: String},
  website: {type: String},
  languages: [{type: String}],
  services: [{type: String}],
  available: {type: Boolean},
  reviews: [{type: mongoose.schema.types.ObjectId, ref: 'reviews'}],
})

devSchema.methods.hashPassword = function(password) {
  if(!password) return Promise.reject(createError(400))

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err)
      this.password = hash
      resolve(this)
    })
  })
}

devSchema.methods.comparePasswords = function(password) {
  return new Promise ((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, valid) => {
      if (err) return reject(err)
      if(!valid) return reject(createError(401, 'wrong password'))
      resolve(this)
    })
  })
}

devSchema.methods.generateToken = function() {
  return new Promise ((resolve, reject) => {
    let token = jwt.sign({id: this._id}, process.env.SECRET || 'DEV')
    if(!token) {
      reject('could not generate token')
    }
    resolve(token)
  })
}

module.exports = mongoose.model('devs', devSchema)
