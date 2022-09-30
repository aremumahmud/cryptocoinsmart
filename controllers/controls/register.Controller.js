const db = require('../../db')
const dbs = new db()



module.exports = function(req , res){
    let {username , email , password } = req.body
    dbs.registerUser(username , email , password).then(resp=>{
        res.render('regSuccess')
    }).catch(err=>{
        res.redirect('/login/?pass=false')
    })
}