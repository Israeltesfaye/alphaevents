const express=require('express')
const router=express.Router()
const {createOrder,getOrders} =require('../controllers/order.controller.js')
const verifyAdmin=require('../middlewares/admin.js')

router.post('/',createOrder)
router.get('/',getOrders)

module.exports=router;