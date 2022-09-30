const db = require('../../db')
const dbs = new db()

module.exports = function(req , res){
    dbs.getHistory('withdraw').then(data=>{
        dbs.getHistory('deposit').then(data1=>{
            res.render('admin' , {data , data1})
        }).catch(err=>{
            console.log(err)
        })
        
    }).catch(err=>{
        console.log(err)
    })
}