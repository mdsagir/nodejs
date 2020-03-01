const express=require('express')
const app=express()
const router = new express.Router()

const port=8080



router.get('/', function (req, res) {
    
    console.log('Hello get request..')
    res.send('response data')
  })

app.listen(port,()=>{
    console.log('Server is up to port no '+port);
})