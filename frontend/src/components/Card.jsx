import React from 'react'
import image from '../assets/tshirt.png'
import { useNavigate } from 'react-router-dom'
function Card({tshirt}) {
const navigate=useNavigate()
  return (
    <div className='card' onClick={()=>{navigate(`store/${tshirt.id}`)}}>
        <img src={image} alt={tshirt.image_url} />
        <p>{tshirt.price}</p>
        </div>
  )
 
}

export default Card