// let str =`C:UserssleekwalshDesktopmahmud-aremus-workspacecryptoInvestcryptoappbackendveiws`
// let str2 = 'C:UserssleekwalshDesktopmahmud-aremus-workspacecryptoInvestcryptoappbackendviews'

// let sep1 = str.split('')
// let sep2 = str2.split('')
// for (let index = 0; index < sep1.length; index++) {
//     if(sep1[index] == sep2[index]){
//         continue
//     }else{
//         console.log(sep1[index] , sep2[index])
//     }
// }

let db = require('./db')
let dbs = new db()
// dbs.deposit('63361f8d2400a94d0fbc77af' , 'jskhkufxmx,mzh83e6c17907b2' ,'20').then(res=>{
//     console.log(res)
//     // dbs.withdraw('63357709ebcedbe23c475e14' ,10).then(res=>{
//     //     console.log(res)
//     // }).catch(err=>{
//     //     console.log(err)
//     // })
// }).catch(err=>{
//     console.log(err)
// })

dbs.approveRecord('6336209fe02cbe2b64b97fdb' , 'deposit' , '63361f8d2400a94d0fbc77af' ).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})