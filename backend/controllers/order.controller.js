const Order=require("../models/Order.js")
const axios=require("axios")

createOrder=async()=>{
 var request=await axios({
  url: `https://api.chapa.co/v1/transaction/verify/txn-alpha-${req.body.tx_ref}`,
  method: 'get',
  headers:{
    Authorization:`Bearer ${process.env.CHAPA_SECRET_KEY}`
  }
})
if(request.status==='success'){
  try{
    order=await Order.create({
      productId:req.body.productId,
      price:req.body.amount,
      quantity:req.body.quantity
    })
   
  }catch(e){
    res.sendStatus(400)
  }}

}

module.exports={
  createOrder
}