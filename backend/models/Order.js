const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    productId:{
      type:String
    },
    quantity:{
      type:Number
    }, 
    price:{
        type:Number,
        max:5000
    },
    verified:{
      type:Boolean
    },
    txid:{
      type:String
    }
})

model=mongoose.model('Order',orderSchema)
module.exports=model