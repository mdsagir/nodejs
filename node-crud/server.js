
var express=require('express')
var path=require('path')
var bodyParser=require('body-parser')
var cors= require('cors')
var audit=require('./controller/app')

var port= 3000

var app= express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',audit)
app.listen(port,function(){
    console.log('Server stater on port: '+port)
})


