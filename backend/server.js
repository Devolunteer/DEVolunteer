'use strict'

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const authRouter = require('./route/auth-router.js')
const errorMiddleware = require('./lib/error-midd.js')

const app = express()
dotenv.load()

//local mongo db will be called 'devolunteer'
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/devolunteer'



mongoose.connect(MONGODB_URI)
mongoose.Promise = Promise

app.use(cors())
app.use(morgan('dev'))
app.use(authRouter)
app.use(errorMiddleware)

module.exports = app

if(require.main === module) {
  app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
  })
}
