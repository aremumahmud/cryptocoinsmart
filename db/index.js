const mongoose = require('mongoose')
const User = require("../Models/User.Model.js")
const withdrawalRecord = require('../Models/Withdrawal.Model.js')
const depositRecord = require('../Models/Deposit.Model.js')
const Plan = require('../Models/Plans.Model')
const refresh = require('../middlewares/refresh.Middleware')
const plans = require('../plans')
const PlansModel = require('../Models/Plans.Model')
const Referal = require('../Models/Referal.Model')
const ReferalUser = require('../Models/ReferalUser.Model')
const compare = require('../libs/compare')
const referalAdd = require('./add')
const sendmail = require('./sendmail')








mongoose.connect( process.env.URI || 'mongodb://127.0.0.1:27017/cryptoappk' ,null ,()=>{
	console.log('connected')
}); 

function db_controller (){

}

db_controller.prototype.registerUser =  function( username , email , password , referer ){
	return new Promise((res , rej)=>{
	  var newUser = new User({
		  username,
		  email,
		  password,
		  currentBalance :0,
		  currentPlans : [],
		  withdrawalRecords : [],
		  depositRecords : [],
		  date : new Date(),
      referalsNo : [],
      referalDeposits : [],
      referer 

	  })
	  newUser.save(err=>{
		if(err){
		  rej({
			err,
			msg : "couldnt create user"
		  })
		}else{
      
      if(referer == '' || referer == undefined || referer == null){
        sendmail(email)
                res({
    			sucess : true
    		})
      }else{
        this.updateRef(referer , username).then(resp=>{
          sendmail(email)
        res({
    			sucess : true
    		})
      }).catch(err=>{
        rej(err)
      })
      }
      
		 
		}
	  })
	})
}

db_controller.prototype.login = function(email , password){
	return new Promise((res,rej)=>{
	 User.findOne({ email , password},function (err , user ){
		 if (err){
		   rej({
			 err,
			 msg : "invalid username or password"
		   })
		 }else{
		   res({
			 sucess : true ,
			 user
		   })
		 }
	  })
	})
   
}

db_controller.prototype.getUserData = function(_id){
	return new Promise((res,rej)=>{
	 User.findOne({_id})
	  .populate('withdrawalRecords')
	  .populate('depositRecords')
	  .populate('currentPlans')
    .populate('referalDeposits')
    .populate('referalsNo')
	  .exec(function (err , user ){
		 if (err){
		   rej({
			 err,
			 msg : "invalid username or password"
		   })
		 }else if (user == null || user == undefined){
		      rej()
		 }else{
			res({
				sucess : true ,
				user
			  })
		 }
	  })
	})
   
}

db_controller.prototype.refreshMiddlware = function (req,res,next){
	    let _id = req.params.id
		let self = new db_controller()
		console.log(self)
        User.findOne({_id} , (err , found)=>{
			if(found == undefined || found == null) return res.render('dasErr')
            console.log(found.currentPlans , 'kkk')
            if(err){
                console.log(err)
                res.send('unauthorized login')
            }else if(found == null || found == undefined){
                console.log('ccccc')
                res.send('unauthorized login')
            }else{
                if(found.length == 0 || Object.keys(found).length == 0){
                    res.send('unauth login')
                }else{
                    let plans = found.currentPlans 
                    if(plans.length == 0) return next()
                    let count = 0
                    plans.forEach( plan=>{
                        self.update(plan ,found.email).then(res=>{
                            count++
							console.log(res, count , plans.length)
                            if(count == plans.length){
                                next()
                            }
                        }).catch(err=>{
							console.log(err , 'rr')
							res.send(err)
						})
                    }) 
                  }
            }
        })
}

db_controller.prototype.update = function(_id ,email){
	console.log(_id)
	return new Promise((res,rej)=>{
        PlansModel.findOne({_id} , (err,plan)=>{
			if(err){
				
				rej(err)
			}else{
				let dist = compare(plan.start)
				if(dist > plan.duration || dist > plan.duration ){
					
					 User.findOne({email},(err,user)=>{
						 if(err){
							 rej(err)
						 }else{
							 user.currentBalance += plan.balance 
               plan.balance = 0
               plan.save(err=>{
                 if(err){
                   rej(err)
                 }
               })
							 user.save(err=>{
								 if(err){
									 rej()
								 }else{res()}
							 })
						 }
					 })
				  }else{
					res()
				}
			}
		})
	})
	
}

db_controller.prototype.withdraw = function(_id ,amount){
	return new Promise((res,rej)=>{
		User.findOne({_id} , (err , found)=>{
			if(err){
				rej(err)
			}else if(found.length == 0 || Object.keys(found).length == 0){
                rej(err)
			}else{
				let balance  = found.currentBalance
				amount = Number(amount)
				let withdraw_amount  = amount + (amount*5/100)
				console.log(amount , withdraw_amount , balance)
				if(balance < withdraw_amount){
					rej({
						error : true,
						reason : 'insufficient funds '
					})
				}else{
					found.currentBalance = balance - withdraw_amount
					let record = new withdrawalRecord({
						username : found.username,
						email : found.email,
						amount : withdraw_amount,
						approved : false
					})
					record.save()
					found.withdrawalRecords.push(record)
					found.history.push(record)
					found.save(err=>{
						if(err){
							rej(err)
						}else{
							res(record)
						}
					})
				}
			}
		})
	})
	
}

db_controller.prototype.deposit = function(_id , hash , amount,coin){
	return new Promise((res,rej)=>{
		User.findOne({_id} , (err , found)=>{
			if(err){
				rej(err)
			}else if(found.length == 0 || Object.keys(found).length == 0){
                rej(err)
			}else{
					let record = new depositRecord({
						username : found.username,
						email : found.email,
						amount : amount,
						approved : false,
						transactionHash : hash,
						coin : coin
					})
					record.save(err=>{if(err){rej()}})
					found.depositRecords.push(record)
					found.history.push(record)
					found.save(err=>{
						if(err){
							rej(err)
						}else{
							res(record)
						}
					})
			}
		})
	})
	
}

db_controller.prototype.approveRecord= function(record_id , type , email ){
	return new Promise((res , rej)=>{
        if (type == 'withdraw'){
			withdrawalRecord.findById(record_id ,(err , record)=>{
				if (err){
					rej(err)
				}else if(record.length == 0 || Object.keys(record).length == 0){
					rej({
						err : 'couldnt find record'
					})
				}else{
					record.approved = true
					record.save(err=>{
						if(err){
							rej(err)
						}else{
							res({
								sucess : 'approved successfully'
							})
						}
					})
				}
			})
		}else if(type == 'deposit'){
			depositRecord.findById(record_id ,(err , record )=>{
				if (err){
					rej(err)
				}else if(record.length == 0 || Object.keys(record).length == 0){
					rej({
						err : 'couldnt find record'
					})
				}else{
					User.findOne({email} , (err , found)=>{
						if (err){
							rej(err)
						}else if(found.length == 0 || Object.keys(found).length == 0){
							rej({
								err : 'couldnt find user'
							})
						}else{
							found.currentBalance += record.amount
							record.approved = true
							record.save(err=>{
								if(err){
									rej(err)
								}else{
									found.save(err=>{
										if(err){
											rej(err)
										}else{
                       if(found.referer == '' || found.referer == undefined || found.referer == null){
                          res({
												sucess : 'approved successfully'
											  })
											
                       }else{
                         this.updateDepositRef(found.referer , record.amount , found.username).then(e=>{ 
                         res({
												sucess : 'approved successfully'
											  })
                       }).catch(err=>{
                         rej(err)
                       })
                       }
                       
										}
									})
									
								}
							})
						}
					})
				}
			})
		}else{
			throw new Error('unsupported type')
		}
		
	})
	
}

db_controller.prototype.addToBalance = function(plan_id , _id){
    return new Promise((res ,rej)=>{
		User.findOne({_id} , (err,found)=>{
			if (err){
				rej(err)
			}else if(record.length == 0 || Object.keys(record).length == 0){
				rej({
					err : 'couldnt find record'
				})
			}else{
				PlansModel.findOne({_id : plan_id},(err,plan)=>{
					if(plan.ended){
						found.currentBalance += plan.balance
						plan.balance = 0
						plan.save
						found.save(err=>{
							if(err){
								rej({
									error : 'error occured'
								})
							}else{
								res({
									sucess : true
								})
							}
						})
					}else{
						rej({
							reason : 'unended'
						})
					}
                    
				    
				})
			}
		})
	})
}


db_controller.prototype.getHistory = function (type){
   return new Promise((res,rej)=>{
	   if(type == 'withdraw'){
		   withdrawalRecord.find((err , records)=>{
				if(err){
					rej(err)
				}else{
					res(records)
				}
			})
	   }else if (type == 'deposit'){
			depositRecord.find((err , records)=>{
				if(err){
					rej(err)
				}else{
					res(records)
				}
			})
	   }
	   
   })
}

db_controller.prototype.activatePlans = function(plan , _id , amount){
	return new Promise((res,rej)=>{
		console.log(_id)
		User.findOne({_id} , (err ,found)=>{
			if (err){
				rej(err)
			}else if(found.length == 0 || Object.keys(found).length == 0){
				rej({
					err : 'couldnt find record'
				})
			}else{
        amount = Number(amount)
				let percentage = Number(plans[plan].percentage)
				let future_bal = amount + ((amount*percentage)/100)
				let pland = new Plan({
					name : plan,
					balance : future_bal,
					start : new Date(),
					duration : plans[plan].duration
				})
				pland.save()
				found.currentPlans.push(pland)
				found.save(err=>{
					if(err){
						rej(err)
					}else{
						res({
							sucess : true
						})
					}
				})
			}
		})
	})
}

db_controller.prototype.buyPlan = function(plan,amount ,_id){
	return new Promise((res,rej)=>{
		User.findOne({_id} , (err , found)=>{
			if(err){
				//console.log('here3')
				rej(err)
			}else if(found.length == 0 || Object.keys(found).length == 0){
				//console.log('here4')
                rej(err)
			}else{
				let balance  = found.currentBalance
				let withdraw_amount  = amount
				if(balance < withdraw_amount){
					rej({
						error : true,
						reason : 'insufficient funds '
					})
				}else{
					found.currentBalance = balance - withdraw_amount
					this.activatePlans(plan , found._id , amount).then(resp=>{
						found.save(err=>{
							if(err){
								rej(err)
							}else{
								res(resp)
							}
						})
					}).catch(err=>{
						//console.log('here5')
                        rej(err)
					})
				}
			}
		})
	})
	
}

db_controller.prototype.edit = function(_id , datatype , data){
	return new Promise((res,rej)=>{
		User.findOne({_id} , (err , found)=>{
			if (err || found == null || found == undefined){
				console.log('kkl')
				rej({
					error : true,
					err :err
				})
			}else{console.log('kkl')

				if(datatype == 'username'){
					found.username = data
					found.save(err=>{
						if(err){
							rej(err)
						}else{
							res({
								sucess : true.save,
								user : found
							})
						}
					})
				}else if(datatype == 'email'){
					found.email = data
					found.save(err=>{
						if(err){
							rej(err)
						}else{
							res({
								sucess : true,
								user : found
							})
						}
					})
			    }else if(datatype == 'password'){
					found.password = data
					found.save(err=>{
						if(err){
							rej(err)
						}else{
							res({
								sucess : true,
								user : found
							})
						}
					})
				}else if(datatype == 'usdtAddress'){
					console.log('kkl')
					found.usdtAddress = data
					found.save(err=>{
						if(err){
							console.log('err' , err)
							rej(err)
						}else{
							console.log('ersrhjb ' , err)
							res({
								sucess : true,
								user : found
							})
						}
					})
				}else{
					rej({
						empty:true
					})
				}
			
		}
	})
})

}

db_controller.prototype.getUsdt = function(email , call){
	User.findOne({email}  , (err,res)=>{
      if(err){
		  call(err,null)
	  }else{
		  call(null , res)
	  }
	})
}

db_controller.prototype.updateRef = function (ref , users) {
  return new Promise((res , rej)=>{
    User.findOne({username : ref} , (err, found)=>{
    let ref = new ReferalUser({
      user : users,
      time : new Date()
    })
    ref.save(err=>{console.log(err)})
    found.referalsNo.push(ref)
    found.save(err=>{
      if(err){
        rej(err)
      }else{
        res(null)
      }
    })
  })
  })
}


db_controller.prototype.updateDepositRef = function(ref , amt , user){
  return new Promise((res , rej)=>{
    User.findOne({username : ref} , (err, found)=>{
       console.log(found.currentBalance , 1 )
    found.currentBalance += ((Number(amt) * Number(referalAdd))/100)
      console.log(found.currentBalance , 2 )
    let refRecord = new Referal({
          amount : ((Number(amt) * Number(referalAdd))/100),
          user : user
    })
    refRecord.save(err=>{console.log(err)})
    found.referalDeposits.push(refRecord)
    found.save(err=>{
      if(err){
        rej(err)
      }else{
        res(null)
      }
    })
  })
  })
}

module.exports = db_controller