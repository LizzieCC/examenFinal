const mongoose = require('mongoose')
const config = require('../config.js')

var connectionURL = config.connectionURL || process.env.URL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
