import React,{useState} from 'react'
import '../login.css'

function Register() {

    const [username,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
async function register(e){
e.preventDefault()
  var  req=await fetch('http://localhost:8000/api/user/register',{
        method:'POST',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            username:username,
            password:password,
            email:email
          })
    })
    var data=await req.json()
    console.log(data)
}
  return (
    <div>
         <div className="box">
         <img src="user.png" className="image"/>
        <h1>register here</h1>
        <form onSubmit={(e)=>{register(e)}}>
            <input type="text " name="username" placeholder="Enter username" onChange={(e)=>{setName(e.target.value)}}/>
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