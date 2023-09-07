const jwt=require('jsonwebtoken')


module.exports=function verifyAdmin(req,res,next){
token=req.body.token
    try {
  verifiedtToken= jwt.verify(token,process.env.ADMIN_KEY)
   req.token=verifiedtToken
   next()
} catch (error) {
    res.sendStatus(403)
}
}