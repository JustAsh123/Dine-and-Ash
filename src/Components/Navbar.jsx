import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <p className="logo">Dine&<span style={{color: "lime"}}>Ash</span></p>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Cart</a></li>
                <li><a href="">Profile</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar