import React from 'react'
import EventCard from '../components/EventCard'
var events=[
    {
        title:'rophnan concerte',
        description:'see you soon',
        tickets:50,
        price:'ETB 300'
    },
    {
      title:'tedy concerte',
      description:'see you soon',
      tickets:50,
      price:'ETB 1000'
  },
]
function Events() {
  return (
    <div className='events'>
         {events.map((event)=>{
      return (
        <div key={events.indexOf(event)}>
                 <EventCard event={event}/> 
        </div>
      )
      console.log("jxkzx")
    })}
    </div>
  )
}

export default Events