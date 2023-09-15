const Product=require('../models/Product.js')


createProduct=async(req,res)=>{
try{
  const product=await Product.create({
        url:req.body.url,
        price:req.body.price,
        description:req.body.description,
    })
   res.status(200).json({msg:"product created"})
   } catch (error) {
    res.sendStatus(400)
   }
}
getProducts=async(req,res)=>{
    try {
        products=await Product.find()
        res.json(products)
    } catch (error) {
      res.sendStatus(400)
    }
}
deleteProduct=async(req,res)=>{
  try{
    product=await Product.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
  }catch(error){
    res.sendStatus(400)
  }
}
updateProduct=async(req,res)=>{
    try {
        product=await Product.findByIdAndUpdate(req.params.id,{
           image_url:req.body.image_url,
           price:req.body.price,
           description:req.body.description 
        })
        res.sendStatus(200).json({msg:"product updated"})
    } catch (error) {
        res.sendStatus(400)
    }
}
getProduct=async(req,res)=>{
    try {
      product=await Product.findById(req.params.id)  
       res.status(200).json(product)
    } catch (error) {
        res.sendStatus(400)
    }
}
module.exports={
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    getProduct
}