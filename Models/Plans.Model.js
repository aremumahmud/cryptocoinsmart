var mongoose = require('mongoose')

const PlanSchema = mongoose.Schema({
  name : {
        type : String,
       required : true
  },
  balance : {
    type : Number,
    required : true
  },
  duration : {
    type : Number,
    required : true
  },
  start : {
    type : Date,
    required : true
  }
})

module.exports = mongoose.model( 'Plan', PlanSchema );