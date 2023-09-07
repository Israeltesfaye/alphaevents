import React from 'react'
import Card from '../components/Card'
var tshirts=[
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
    
]
function Home() {
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