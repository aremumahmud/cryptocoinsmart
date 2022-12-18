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
  transactionHash :{
    type : String,
    unique : true,
    required : true
  },
  approved : Boolean,
  coin : String
})

module.exports = mongoose.model( 'Deposit', UserSchema );