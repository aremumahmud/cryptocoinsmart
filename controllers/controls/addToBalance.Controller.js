const db = require('../../db')
const dbs = new db()

module.exports = function(req , res){
    let id = req.params.id
    let plan = req.query.plan
    dbs.addToBalance(plan , id).then(data=>{
        res.redirect('/dashboard/'+id)
    }).catch(err=>{
        res.render('insuff')
    })
}