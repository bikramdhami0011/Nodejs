const {MongoClient}=require('mongodb')
const url='mongodb://127.0.0.1:27017'
const client=new MongoClient(url);
const getdata=async()=>{
   const con=await client.connect()
   const dbs=con.db('e-commer')
   const collect=dbs.collection('product');
   const result=await collect.find({name:'bikram1'}).toArray();
   console.log(result)
}
getdata()
