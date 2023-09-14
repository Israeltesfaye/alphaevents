require("dotenv").config()
const express=require('express')
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
const port=process.env.PORT || 8000
const products=require('./routes/products.js')
const events=require("./routes/events.js")
const user=require("./routes/user.js")
const order=require("./routes/order.js")

app.use(cors())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended:false}))


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected")
})

app.use('/api/products',products)
app.use('/api/events',events)
app.use('/api/user',user)
app.use('/api/order',order)


app.listen(port,()=>{
    console.log("app running on port "+port)
})