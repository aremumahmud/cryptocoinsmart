const db = require('../../db')
const dbs = new db()



module.exports = function(req , res){
    let { id } = req.params
    let { plan } = req.query
    dbs.buyPlan(plan , id).then(resp=>{
        res.redirect('/pages/plans/' + id)
    }).catch(err=>{
        res.render('insuff')
    })
}