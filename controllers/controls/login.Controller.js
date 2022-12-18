const db = require('../../db')
const dbs = new db()



module.exports = function(req , res){
    let { email , password } = req.body
    dbs.login(email , password ).then(resp=>{
        res.redirect('/pages/dashboard/' + resp.user._id)
    }).catch(err=>{
        res.redirect('/login/?pass=false')
    })
}