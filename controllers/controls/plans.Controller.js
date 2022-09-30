const { error } = require('node:console')
const db = require('../../db')
const dbs = new db()

module.exports = function(req , res){
    let id = req.params.id
    console.log(id , 'kmdnmnd')
    dbs.getUserData(id).then(data=>{
        res.render('plans' , {data : data.user})
        console.log(data.user , 'dd')
    }).catch(err=>{
        res.redirect('/pages/dashboard/' + id)
    })
}