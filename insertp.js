const repuire=require('./config');
const psmodel=require("./product");
const express=require("express");
const app=express();
app.use(express.json());
app.get('/create/:name',async(req,resp)=>{
    const data=await psmodel.find(req.params)
     console.log(req.params)
     resp.send(data)
});
app.listen(8080);

