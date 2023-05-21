
const express=require('express')
const app=express();
const mongodb=require('mongodb');
const dbconnet=require('./mongodb');
app.get('/',async(req,resp)=>{
    const data=await dbconnet()
    const result=await data.find().toArray();
    resp.send(result)
    resp.end()
})
//from this we send api from postman to mongodb
app.use(express.json())
app.post('/',async(req,resp)=>{
    const data=await dbconnet()
    const result=await data.insertOne(req.body)
    resp.send(result)
})
app.put('/:name',async(req,resp)=>{
    const data=await dbconnet( )
    const result=await data.updateOne(
        {name:req.params.name},//name:req.body.name hunxa other datachange garnkolagi 
        //name change garnkolagi parameter ko paryoga garnuparxa name:req.params.name
        {$set:req.body}
        )
    console.log(result)
})
app.delete('/:id',async(req,resp)=>{
    const data=await dbconnet()
    const result=await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    console.log(result)
})
app.listen(4000)
