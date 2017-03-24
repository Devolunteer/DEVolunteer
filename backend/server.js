'use strict'

const express = require('express')

const authRouter = require('./route/auth-router.js')
const errorMiddleware = require('./lib/error-midd.js')

const app = express()

app.use(authRouter)
app.use(errorMiddleware)

//connect to PORT
//load some envs
//cors?
//routes for models
