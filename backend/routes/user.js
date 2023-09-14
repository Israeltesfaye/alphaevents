const express=require('express')
const router=express.Router()
const {createUser,deleteUser,login} =require('../controllers/user.controller.js')

router.post('/login',login)
router.post('/register',createUser)
router.delete('/:id',deleteUser)




module.exports=router;