const express=require('express')
const router=express.Router()
const {createEvent,getEvents,getEvent,updateEvent,deleteEvent} =require('../controllers/events.controller.js')
const verifyAdmin=require('../middlewares/admin.js')

router.get('/',getEvents)
router.get('/:id',getEvent)
router.post('/',verifyAdmin,createEvent)
router.put('/:id',verifyAdmin,updateEvent)
router.delete('/:id',verifyAdmin,deleteEvent)




module.exports=router;