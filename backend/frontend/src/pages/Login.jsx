import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../login.css'

function Login() {
  const navigate=useNavigate('')
    const [username,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
async function register(e){
    e.preventDefault()
   var req=await fetch('https://alphaevent.onrender.com/api/user/login',{
        method:'POST',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            password:password,
            email:email
          })
    })
   var data=await req.json()
    if(req.ok){
      alert('welcome')
      localStorage.setItem('user',JSON.stringify(data))
      navigate('/')
    }else{
      alert('try again')
    }
}
  return (
    <div>
         <div className="box">
         <img src="user.png" className="image"/>
        <h1>login here</h1>
        <form onSubmit={(e)=>{register(e)}}>
            <input type="email" name="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password " name="password" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="submit" value="login"/>
            <a href="#">forgot password</a>
        </form>


    </div>
    </div>
  )
}

export default Login