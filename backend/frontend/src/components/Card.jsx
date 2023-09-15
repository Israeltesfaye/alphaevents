import React, { useState } from 'react'
import Pay from './Pay'


function Card({t}) {


let user=JSON.parse(localStorage.getItem("user"))
const [quantity,setQuantity]=useState(0)
let fprice=t.price*quantity
let actualPrice=`ETB ${t.price}`
  return (
    <div className='card'>
        <img src={t.url} alt={t.url} className='card'/>
        <p>{actualPrice}</p>
        <input type="number" name="quantity" className='quantity'  onChange={(e)=>{setQuantity(e.target.value)}} value={quantity}/>
        <Pay price={fprice} email={user.email} fname={user.firstname} lname={user.lastname} desc={t.description}/>  
        </div>
  )
 
}

export default Card