const db = require('../../db')
const dbs = new db()



module.exports = function(req , res){
    let { id } = req.params
    let { plan , amount } = req.query
    dbs.buyPlan(plan , amount , id).then(resp=>{
        res.redirect('/pages/plans/' + id)
    }).catch(err=>{
        res.render('insuff')
    })
}