const dbconnect=require('./mongodb');
 
const deletecoll=async()=>{
   const data=await dbconnect()
   const result= await data.deleteMany({name:'bikram'});
   console.log(result)
}
deletecoll()



