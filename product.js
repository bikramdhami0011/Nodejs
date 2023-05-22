const mongoose=require('mongoose')
const productschema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,

})
module.exports= mongoose.model('products',productschema);