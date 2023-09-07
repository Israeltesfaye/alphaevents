const Event=require('../models/Event.js')



createEvent=async(req,res)=>{
   try {
    const event=await Event.create({
        image_url:req.body.image_url,
        price:req.body.price,
        description:req.body.description,
        tickets:req.body.tickets
    })
    res.send(event)
   } catch (error) {
    res.sendStatus(400)
   }
}
getEvents=async(req,res)=>{
    try {
        events=await Event.find()
        res.send(events)
    } catch (error) {
      res.sendStatus(400)
    }
}
deleteEvent=async(req,res)=>{
  try{
    events=await Event.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
  }catch(error){
    res.sendStatus(400)
  }
}
updateEvent=async(req,res)=>{
    try {
       event=await Event.findByIdAndUpdate(req.params.id,{
           image_url:req.body.image_url,
           price:req.body.price,
           description:req.body.description,
           tickets:req.body.tickets
        })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(400)
    }
}
getEvent=async(req,res)=>{
    try {
      events=await Event.findById(req.params.id)  
       res.send(events)
    } catch (error) {
        res.sendStatus(400)
    }
}
module.exports={
    createEvent,
    getEvents,
    deleteEvent,
    updateEvent,
    getEvent
}