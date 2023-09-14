import React from 'react'
import '../login.css'

function Login() {
  return (
    <div>
         <div class="box">
         <img src="user.png" class="image"/>
        <h1>login here</h1>
        <form method='POST' action='http://localhost:8000/api/user/login'>
            <input type="text " name="username" placeholder="Enter username"/>
            <input type="email" name="email" placeholder="Enter email"/>
            <input type="password " name="password" placeholder="Enter password"/>
            <input type="submit" value="login"/>
            <a href="#">forgot password</a>
        </form>


    </div>
    </div>
  )
}

export default Login