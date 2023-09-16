import React,{useEffect, useState} from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom';


/*var tshirts=[
    {
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },
    {
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },{
        img_url:'../assets/tshirt.png',
        description:'cool jacket',
        price:'ETB 295.56',
        id:1
    },
    
]*/
function Home() {
    const navigate=useNavigate()
const [tshirts,setTshirts]=useState([])
    async function fetchData() {
    const response = await fetch("https://alphaevent.onrender.com/api/products/");
    const data=await response.json()
    setTshirts(data)
    console.log(data)
    }
useEffect(() => {
    fetchData();
  }, []); 

  return (localStorage.getItem('user')?
  <div className='main'>
  {tshirts.map((tshirt)=>{
    return (
      <div key={tshirts.indexOf(tshirt)}>
        <Card t={tshirt}/>       
      </div>
    )
  })}
  </div> : location.pathname="/login"

  

  )
}

export default Home