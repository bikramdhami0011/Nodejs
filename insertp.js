const repuire=require('./config');
const psmodel=require("./product");
const express=require("express");
const app=express();
app.use(express.json());
app.post('/create',async(req,resp)=>{
    const data=await psmodel.insertMany({req,body})
     console.log(req.params)
     resp.send(data)
});
app.listen(8080);

