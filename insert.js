const dbconnect=require('./mongodb')

const insert=async(data)=>{
 const db=await data 

  const result= await db.insertOne( {name: 'biajdhfiqwehfh',
  pirce: 11132323,
  brand: 'well develope2323r'})
  if(result.acknowledged==true){
    console.log("data is inserted")
  }
}
insert(dbconnect())