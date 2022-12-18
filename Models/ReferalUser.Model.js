var mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  user : String,
  time : Date
})

module.exports = mongoose.model( 'ReferalUser', UserSchema );