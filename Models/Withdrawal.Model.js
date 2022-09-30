var mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  username : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  amount : Number,
  approved : Boolean
})

module.exports = mongoose.model( 'Withdraw', UserSchema );