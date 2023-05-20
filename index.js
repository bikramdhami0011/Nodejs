const dbconnect=require('./mongobc')
const d=dbconnect()
const main=async(data)=>{
  result= await data
  respon= await result.find().toArray()
  console.log(respon)
}
main(d)