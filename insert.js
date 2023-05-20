const dbconnect=require('./mongodb')

const insert=async(data)=>{
 const db=await data 

  const result= await db.insertOne( {name: 'bikraadfa 0',
  pirce: 1111111111,
  brand: 'well developer'})
  if(result.acknowledged==true){
    console.log("data is inserted")
  }
// console.log(result)
}
insert(dbconnect())