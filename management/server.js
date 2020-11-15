const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/customers', (req,res)=>{
    res.send([{
        'id':1,
        'image':'http://placeimg.com/64/64/any',
        'name':'홍길동',
        'birthday':'040404',
        'gender':'남자',
        'job':'백수쉑'
      },{
        'id':2,
        'image':'http://placeimg.com/64/64/any',
        'name':'바보',
        'birthday':'040404',
        'gender':'여자',
        'job':'백수쉑'
      },{
        'id':1,
        'image':'http://placeimg.com/64/64/any',
        'name':'멍청이',
        'birthday':'040404',
        'gender':'남자',
        'job':'백수쉑'
      }])
})

app.listen(port, ()=>{
    console.log('server start');
})