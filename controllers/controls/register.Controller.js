const db = require('../../db')
const dbs = new db()



module.exports = function(req , res){
    let {username , email , password , referal} = req.body
    dbs.registerUser(username , email , password , referal).then(resp=>{
        res.render('regSuccess')
    }).catch(err=>{
      console.log(err)
        res.redirect('/register/?pass=false&ref='+referal)
    })
}