const db = require('../../db')
const dbs = new db()



module.exports = function(req , res){
    let { id } = req.params
    let {amount , hash} = req.body
    dbs.deposit(id , hash , amount).then(resp=>{
        res.redirect('/pages/dashboard/' + id)
    }).catch(err=>{
       res.redirect(`/deposit/${id}/?pass=false`)
    })
}