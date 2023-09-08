const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    url:{
        type:String
    },
    price:{
        type:Number,
        max:5000
    },
    description:{
        type:String,
        max:255
    }
})

model=mongoose.model('Product',ProductSchema)
module.exports=model