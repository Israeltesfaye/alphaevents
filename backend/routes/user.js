const express=require('express')
const router=express.Router()
const {createUser,deleteUser,login} =require('../controllers/user.controller.js')

router.post('/',login)
router.post('/',createUser)
router.delete('/:id',deleteUser)




module.exports=router;