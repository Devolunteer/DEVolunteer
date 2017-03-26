'use strict'

let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
let createError = require('http-errors')
let jwt = require('jsonwebtoken')

let npoSchema = mongoose.Schema({
  org: {type: String, required: true, unique: true}, //organization name
  password: {type: String, required: true},
  city: {type: String},
  state: {type: String},
  phone: {type: String},
  email: {type: String},
  projects: [{type: String}],
  developers: [{type: mongoose.Schema.Types.ObjectId, ref: 'devs'}],
  reviews: [{type:mongoose.Schema.Types.ObjectId, ref: 'reviews'}],
})

npoSchema.methods.hashPassword = function(password) {
  if(!password) return Promise.reject(createError(400))

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err)
      this.password = hash
      resolve(this)
    })
  })
}

npoSchema.methods.comparePasswords = function(password) {
  return new Promise ((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, valid) => {
      if (err) return reject(err)
      if(!valid) return reject(createError(401, 'wrong password'))
      resolve(this)
    })
  })
}

npoSchema.methods.generateToken = function() {
  return new Promise ((resolve, reject) => {
    let token = jwt.sign({id: this._id}, process.env.SECRET || 'DEV')
    if(!token) {
      reject('could not generate token')
    }
    resolve(token)
  })
}

module.exports = mongoose.model('npos', npoSchema)
