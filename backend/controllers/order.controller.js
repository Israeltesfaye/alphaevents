const Order=require("../models/Order.js")

createOrder=async()=>{
  try{
    order=await Order.create({
      productId:req.body.productId,
      price:req.body.price,
      quantity:req.body.quantity
    })
   
  }catch(e){
    res.sendStatus(400)
  }
}

module.exports={
  createOrder
}