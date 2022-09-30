const db = require('../../db')
const dbs = new db()



module.exports = function(req , res){
    let { id } = req.params
    let amount = req.body.amount
    dbs.withdraw(id , amount ).then(resp=>{
        res.redirect('/pages/dashboard/' + id)
    }).catch(err=>{
        res.render('insuff')
    })
}