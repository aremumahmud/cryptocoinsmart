const db = require('../../db')
const dbs = new db()



module.exports = function(req , res){
    let { _id ,datatype , data } = req.body
    console.log(_id ,datatype , data , req.body)
    dbs.edit(_id ,datatype , data).then(resp=>{
        console.log(resp)
        res.redirect('/pages/dashboard/' + resp.user._id)
    }).catch(err=>{
        res.redirect('/pages/dashboard/' + _id)
    })
  //  res.send('ll')
}