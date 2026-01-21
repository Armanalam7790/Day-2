const express  =  require('express')

const app  = express() // server instence  create 

app.get("/" , (req,res)=>{
        res.send("hello world ")
})

app.get("/about" , (req,res)=>{
        res.send("this is about page ")
})

app.get("/home" , (req,res)=>{
        res.send("this is home page ")
})

app.get("/service" , (req,res)=>{
        res.send("this is service page ")
})

app.listen(3000)  //server start