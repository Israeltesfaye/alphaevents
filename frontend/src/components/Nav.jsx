import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <nav>
    <img src={logo} alt="Logo" />
    <ul>
    <NavLink to={'/'}><a>Store</a></NavLink>
     <NavLink to={'/events'}><a>Events</a></NavLink>
     </ul>
    </nav>
  )
}

export default Nav