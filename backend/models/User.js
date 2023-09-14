const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        min:6,
        max:16
    },
    password:{
        type:String,
        max:150,
        min:8
    },
    email:{
        type:String,
        max:255
    }
})

model=mongoose.model('User',UserSchema)
module.exports=model