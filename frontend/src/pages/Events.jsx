import React from 'react'
events=[
    {
        title:'rophnan concerte',
        description:'see you soon',
        tickets:50,
        price:'ETB 300'
    }
]
function Events() {
  return (
    <div>
         {events.map((event)=>{
      return (
        <div key={events.indexOf(event)}>
                  hello
        </div>
      )
    })}
    </div>
  )
}

export default Events