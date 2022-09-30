const db = require('../../db')
const dbs = new db()

module.exports = function(req , res){
    let id = req.params.id
    dbs.getUserData(id).then(data=>{
        res.render('history' , {data : data.user})
    }).catch(err=>{
        res.redirect('/pages/dashboard/' + id)
    })
}