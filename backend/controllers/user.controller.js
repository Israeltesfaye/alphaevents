const User=require('../models/User.js')
const {validateRegister,validateLogin}=require('../middlewares/validation.js')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

createUser=async(req,res)=>{
 const {error}=validateRegister(req.body)
 if (error) return res.status(400).json(error.details[0].message);
 const emailExist=await User.findOne({email:req.body.email})
if(emailExist) return res.status(400).json('email already registered')
salt=await bcrypt.genSalt(10)
const hashed=await bcrypt.hash(req.body.password,salt)
  try{
  const user=await User.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:hashed,
        email:req.body.email,
    })
    res.json({user:user._id})
   } catch (error) {
    res.sendStatus(400)
   }
}
deleteUser=async(req,res)=>{
  try{
    user=await User.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
  }catch(error){
    res.sendStatus(400)
  }
}
login=async(req,res)=>{
  const {error}=validateLogin(req.body)
  if (error) return res.status(400).json(error.details[0].message)
  const user=await User.findOne({email:req.body.email})
   if(!user) return res.status(400).json('email not found')
   const validPass=await bcrypt.compare(req.body.password,user.password)
  if(!validPass) return res.status(400).json('incorrect password')
  const token=jwt.sign({user:user._id},process.env.TOKEN_SECRET)
res.status(200).header('auth',token).json(user)
}
module.exports={
    createUser,
    deleteUser,
    login
}