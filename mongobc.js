const { MongoClient } = require('mongodb');
const url='mongodb://127.0.0.1:27017'
const client=new MongoClient(url)
 async function dbconnect() {
   let conn=await client.connect()
   let dbname=conn.db('e-commer')
   return dbname.collection('product')
   // let resp=await collect.find().toArray()
   // console.log(resp)
}
module.exports=dbconnect;