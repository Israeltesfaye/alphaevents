import React,{useState} from 'react'
import '../login.css'
import {useNavigate} from 'react-router-dom'

function Register() {
    
   const navigate=useNavigate('')
    const [firstname,setFname]=useState('')
    const [lastname,setLname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
async function register(e){
e.preventDefault()
  var  req=await fetch('https://alphaevent.onrender.com/api/user/register',{
        method:'POST',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            firstname:firstname,
            lastname:lastname,
            password:password,
            email:email
          })
    })
    var data=await req.json()
    if(req.ok){
      navigate('/login')
    }else{
      alert(data)
    }
}
  return (
    <div>
         <div className="box">
         <img src="user.png" className="image"/>
        <h1>register here</h1>
        <form onSubmit={(e)=>{register(e)}}>
            <input type="text " name="firstname" placeholder="Enter firstname" onChange={(e)=>{setFname(e.target.value)}}/>
            <input type="text " name="lastname" placeholder="Enter lastname" onChange={(e)=>{setLname(e.target.value)}}/>
            <input type="email" name="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password " name="password" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="submit" value="register"/>
            <a href="#">forgot password</a>
        </form>


    </div>
    </div>
  )
}

export default Register