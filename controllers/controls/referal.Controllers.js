const db = require('../../db')
const dbs = new db()

module.exports = function(req , res){
    let id = req.params.id
    dbs.getUserData(id).then(data=>{
       // console.log(data)
        res.render('ref' , {data : data.user})
    }).catch(err=>{
        res.render('dasErr')
    })
}