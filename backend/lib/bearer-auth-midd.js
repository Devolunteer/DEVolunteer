'use strict'

const jwt = require('jsonwebtoken')
const User = require('../model/user')
const createError = require('http-errors')

//findHash prop is on dev schema

module.exports = (req, res, next) => {
  let authHeader = req.headers.authorization
  if(!authHeader) return next(createError(401, 'requires header'))
  if(!token) return next(createError(401, 'requires token'))

  let token = authHeader.split('Bearer')[1]

  jwt.verify(token, process.env.SECRET || 'DEV', (err, decodedToken) => {
    if(err) return next(createError(500, 'server error'))
    User.findOne({findHash: decodedToken})
    .then(User => {
      req.user = User
      next()
    })
    .catch(() => {
      next(() => createError(401, 'token creation failed'))
    })
  })
}
