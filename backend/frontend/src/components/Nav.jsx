import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <nav>
    <img src={logo} alt="Logo" />
    <h3>Alpha Events</h3>
    <ul>
    <NavLink to={'/'}>Store</NavLink>
     </ul>
    </nav>
  )

}

export default Nav