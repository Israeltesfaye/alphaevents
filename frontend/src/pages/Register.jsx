import React from 'react'
import '../login.css'

function Register() {
  return (
    <div>
         <div class="box">
         <img src="user.png" class="image"/>
        <h1>register here</h1>
        <form method='POST' action='http://localhost:8000/api/user/register'>
            <input type="text " name="username" placeholder="Enter username"/>
            <input type="email" name="email" placeholder="Enter email"/>
            <input type="password " name="password" placeholder="Enter password"/>
            <input type="submit" value="register"/>
            <a href="#">forgot password</a>
        </form>


    </div>
    </div>
  )
}

export default Register