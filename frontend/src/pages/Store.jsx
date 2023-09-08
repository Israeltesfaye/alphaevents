import React,{useEffect, useState} from 'react'
import Card from '../components/Card'


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
const [tshirts,setTshirts]=useState([])
 
useEffect(() => {
   async function fetchData() {
    const response = await fetch("http://localhost:8000/api/products/");
    const data=await response.json()
    setTshirts(data)
    console.log(tshirts)
    }
    fetchData();
    
        
    
  }, []); 

  return (
    <div className='main'>
    {tshirts.map((tshirt)=>{
      return (
        <div key={tshirts.indexOf(tshirt)}>
          <Card tshirt={tshirt}/>       
        </div>
      )
    })}
    </div>
  )
}

export default Home