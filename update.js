const dbconnect=require('./mongodb');
const update=async()=>{
    const db= await dbconnect()
    const updat=await db.updateOne({name:'oppo'},{$set :{name:'oppo pro max'}});
    console.log(updat)
}
update()