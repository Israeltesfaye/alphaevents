import React from 'react'
import image from '../assets/tshirt.png'
import Pay from './Pay'

import { useNavigate } from 'react-router-dom'
function Card({tshirt}) {
const navigate=useNavigate()
let actualPrice=tshirt.price.replace("ETB ","")
  return (
    <div className='card'>
        <img src={image} alt={tshirt.image_url} className='card'/>
        <p>{tshirt.price}</p>
        <Pay price={actualPrice}/>  
        </div>
  )
 
}

export default Card