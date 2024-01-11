import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <section id='navbar'>
        <div className="navbar">
        <div className='floral'><h3>Floral Studio</h3></div>
    <div>
        <ul className='switch_nav'>
            <li><NavLink to={"/home"}>Home</NavLink></li>
            <li><NavLink to={"/aboutus"}>Aboutus</NavLink></li>
            <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
            <li><NavLink to={"/pricing"}>Pricing</NavLink></li>
            <li><NavLink to={"/contacts"}>Contacts</NavLink></li>
            <li><NavLink to={"/add"}>Add page</NavLink></li>
        </ul>
    </div>
    </div>
    </section>
  )
}

export default Navbar