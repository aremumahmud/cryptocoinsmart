var mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = mongoose.Schema({
  username : {
    type : String,
    unique : true,
    required : true
  },
  email : {
    type : String,
    unique : true,
    required : true
  },
  password : {
    type : String,
    required : true,
  },
  time : Date,
  currentBalance : Number,
  currentPlans : [{
    type : Schema.Types.ObjectId,
    ref : 'Plan'
  }],
  withdrawalRecords : [{
    type : Schema.Types.ObjectId,
    ref : 'Withdraw'
  }],
  depositRecords : [{
    type : Schema.Types.ObjectId,
    ref : 'Deposit'
  }],
  usdtAddress : String,
  history : []
})

module.exports = mongoose.model( 'User', UserSchema );