import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <nav>
    <img src={logo} alt="Logo" />
    <ul>
    <NavLink to={'/'}>Store</NavLink>
     </ul>
    </nav>
  )

}

export default Nav