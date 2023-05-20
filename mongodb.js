const {MongoClient}=require('mongodb');
const url= 'mongodb://0.0.0.0:27017';
const client=new MongoClient(url)
const dbconnect=async()=>{
   const  resp= await client.connect();
   const db= resp.db('e-commer');
   return db.collection('product');
  //  const result=await collection.find().toArray();
  // console.log(result)
}
module.exports=dbconnect;
