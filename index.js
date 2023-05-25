
const express=require('express')
const fs=require('fs')
const path =require('path')

const a=path.join(__dirname,'hello')

const app=express();
app.use(express.static(a))

app.get('',(req,resp)=>{
    
})
app.listen(3000)

