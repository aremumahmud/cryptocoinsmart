var mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  user : String,
  amount : Number,
  
})

module.exports = mongoose.model( 'Referal', UserSchema );