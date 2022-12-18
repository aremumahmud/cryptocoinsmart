const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routers')
const db = require('./db')
const dbs = new db()
const path = require('path')

app.use(express.static(path.join(__dirname , 'public')))

app.use(bodyParser())
app.use("/pages" , router)
app.set("view engine" , 'ejs')

app.get('/' , (req,res)=>{
    res.render('home')
})

app.get('/login' , (req,res)=>{
    res.render('login', {data:req.query.pass})
})

app.get('/register' , (req,res)=>{
    res.render('register',{data:req.query.pass, referal : req.query.ref})
})

app.get('/withdraw/:id' , (req,res)=>{
    res.render('withdraw' , {data : req.params.id})
})

app.get('/deposit/:id' , (req,res)=>{
    res.render('deposit' , {data : req.params.id , data2 : req.query.pass})
})

app.get('/view' , (req,res)=>{
    let {hash , amount,coin} = req.query
    res.render('view' , {data:{hash , amount,coin}})
})

app.get('/viewn' , (req,res)=>{
    let {email , amount} = req.query
    dbs.getUsdt(email , (e,r)=>{
        console.log(r)
        res.render('viewn' , {data : r.usdtAddress , data1 : amount})
    })
    
})

app.get('/about' ,(req,res)=>{
  
    res.render('about')
})

let port = process.argv[2] || process.env.PORT
app.listen(port , (e)=>{
  console.log('server started at port :' + port)
})