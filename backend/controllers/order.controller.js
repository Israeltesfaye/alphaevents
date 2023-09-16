const Order=require("../models/Order.js")
const request=require("axios")
verifyOrder=async(tx)=>{
  var options={
    'method':'GET',
    'url': `https://api.chapa.co/v1/transaction/verify/txn-alpha-${tx}`,
    'headers':{
      'Authorization':`Bearer ${process.env.CHAPA_SECRET_KEY}`
    }
  }
  return request(options,function(error,response){
    if(error) return false
    data=response.data
    console.log(data)
  })
 
}
createOrder=async(req,res)=>{
  try{
    order=await Order.create({
      productId:req.body.productId,
      price:req.body.amount,
      quantity:req.body.quantity,
      verified:false,
      txid:req.body.txid
    })
  }catch(e){
    res.sendStatus(400)
  }

}
getOrders=async(req,res)=>{
try {
  finalorders=[]
  orders=await Order.find()
  orders.forEach((o)=>{
if(verifyOrder(o.txid)){
finalorders.push(o)
}
  })
  res.json(finalorders)
} catch (error) {
  res.sendStatus(400)
}

}

module.exports={
  createOrder,
  getOrders,
}