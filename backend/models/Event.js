const mongoose=require('mongoose')

const EventSchema=new mongoose.Schema({
    img_url:{
        type:String
    },
    price:{
        type:Number,
        max:5000
    },
    description:{
        type:String,
        max:255
    },
    tickets:{
        type:Number
    }
})

model=mongoose.model('Event',EventSchema)
module.exports=model