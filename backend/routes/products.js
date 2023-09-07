const express=require('express')
const router=express.Router()
const {createProduct,getProducts,getProduct,updateProduct,deleteProduct} =require('../controllers/product.controller.js')
const verifyAdmin=require('../middlewares/admin.js')

router.get('/',getProducts)
router.get('/:id',getProduct)
router.post('/',verifyAdmin,createProduct)
router.put('/:id',verifyAdmin,updateProduct)
router.delete('/:id',verifyAdmin,deleteProduct)




module.exports=router;