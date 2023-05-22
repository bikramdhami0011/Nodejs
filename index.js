const mongoose=require('mongoose');
const main =async()=>{
  await mongoose.connect('mongodb://0.0.0.0:27017/e-commer')
  const data=new mongoose.Schema({
    name:String,
    price:Number
  });
  const productmodel=mongoose.model('products',data)
  const insert=new productmodel({name:'biksah',price:20000})
  const input=await insert.save();
  console.log(insert);
}
const update=async()=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/e-commer');
    const prschema=new mongoose.Schema({
      name:String,
      price:Number
    })
    const prmodel= mongoose.model('products',prschema)
    const result=await prmodel.updateOne({
      name:'biksah',
    },
    {$set:{price:1900}});
    console.log(result)
    // const res=result.update()
    // console.log(res)

}
// update()
const deletecoll=async ()=>{
  await mongoose.connect('mongodb://0.0.0.0:27017/e-commer')
  const pschema=new mongoose.Schema({
    name:String,
    price:Number,
  })
  const pmodel=mongoose.model('products',pschema);
  const result=await pmodel.deleteOne({name:"biksah"})
  console.log(result);
}
deletecoll();
// main()

