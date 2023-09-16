import React,{useEffect, useState} from 'react'
import upload from '../assets/upload.png'
import { NavLink } from 'react-router-dom'
import Order from '../components/Order'
//  <NavLink onClick={showOrder}>order</NavLink>
function Admin() {
 /* useEffect(()=>{
    getOrders()
  },[])*/
    function uploadClick(){
          document.querySelector(".form").style.display="grid"
          document.querySelector(".upload").style.display="none"
    }
    const [price, getPrice] = useState("");
    const [desc, getDisc] = useState("");
    const [url, getUrl] = useState("");
    const [orders, setOrders] = useState([])
   async function handleSubmit(){
       let saved=await fetch('https://alphaevent.onrender.com/api/products/' , {
            method: 'POST',
            headers: {
              'Accept': 'application.json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
url:url,
description:desc,
price:price,
token:localStorage.getItem('token')
            })
          })
          let msg=await saved.json()
          alert(msg.msg)
        
            }
    function showOrder(){
document.querySelector('.admin').style.display="none"
document.querySelector('.m2').style.display="grid"
    }
    async function getOrders(){
      const response=await fetch('https://alphaevent.onrender.com/api/order/')
      const data=await response.json()
      setOrders(data)
      console.log('order')
    } 
    return (
    localStorage.getItem('token')
    ?<>
    <nav className='n2'><ul>
    <NavLink onClick={()=>{
      document.querySelector('.admin').style.display="block"
      document.querySelector('.m2').style.display="none"
    }}>admin</NavLink>
  
    </ul></nav>
    <div className="m2">
      {orders.map((order)=>{
        return(<Order order={order}/>)
      })}
    </div>
        <div className='admin'> 

    <img src={upload} alt='add' onClick={uploadClick} className='upload'/>
    <div className='form'>
        <label htmlFor="file">image</label>
      <input type="text" name="file" id="file"  placeholder="url" onChange={(e) => getUrl(e.target.value)} />
      <label htmlFor="price" >price</label>
      <input type="number" name="price" id="price"  placeholder='price in ETB' onChange={(e) => getPrice(e.target.value)}/>
      <textarea name="description" id="" cols="30" rows="10" placeholder='add your description here' onChange={(e) => getDisc(e.target.value)}></textarea>
      <button onClick={handleSubmit}>upload</button>
    </div>
</div>
</>
    : <p>not allowed</p>
  )
}

export default Admin