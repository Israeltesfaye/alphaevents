const Product=require('../models/User.js')


createUser=async(req,res)=>{
  const user=await User.create({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
    })
    res.status(200).json(user)
   } catch (error) {
    res.sendStatus(400)
   }
}
deleteUser=async(req,res)=>{
  try{
    user=await user.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
  }catch(error){
    res.sendStatus(400)
  }
}
login=async(req,res)=>{
res.send("login")
}
module.exports={
    createUser,
    deleteUser,
    login
}