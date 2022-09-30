const db = require('../../db')
const dbs = new db()



module.exports = function(req , res){
   // let { id } = req.params
    let {type , record_id , email} = req.query
    dbs.approveRecord(record_id , type , email).then(resp=>{
        res.redirect('/pages/admin')
    }).catch(err=>{
        res.send({
            sucess : false ,
            data : null
        })
    })
}