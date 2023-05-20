const dbconnect=require('./mongobc');
const insert=async()=>{
  const data= await dbconnect();
  const ins=await data.insertMany([{
    name:"bikram1",
    pirce:1111111111,
    brand:"well developer"
  },{
    name:"bikram2",
    pirce:1111111111,
    brand:"well developer"
  },
  {
    name:"bikram3",
    pirce:1111111111,
    brand:"well developer"
  }]);
  if(ins.acknowledged){
    console.log("inserted value")
  }
}
insert()