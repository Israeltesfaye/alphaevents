import React from 'react'
import image from '../assets/tshirt.png'
import Pay from './Pay'

import { useNavigate } from 'react-router-dom'
function Card({tshirts}) {
const navigate=useNavigate()
let actualPrice=tshirts.price.replace("ETB ","")

  return (
    <div className='card'>
        <img src={image} alt={tshirt.url} className='card'/>
        <p>{tshirt.price}</p>
        <Pay price={actualPrice}/>  
        </div>
  )
 
}

export default Card