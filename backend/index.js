require("dotenv").config()
const express=require('express')
const mongoose=require("mongoose")
const app=express()
const port=process.env.PORT || 8000
const products=require('./routes/products.js')
const events=require("./routes/events.js")

app.use(express.json())
app.use(express.urlencoded({extended:false}))


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected")
})

app.use('/api/products',products)
app.use('/api/events',events)


app.listen(port,()=>{
    console.log("app running on port "+port)
})