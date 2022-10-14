// rfce 
import React from 'react'
import { Link } from 'react-scroll'
import logo from '../images/logo1.png';

function Navbar() {
  return (
    <div>
      <nav>
        <Link to='main' className='logo'>
            <img src={logo} alt=''/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon' ></span>
        </label>
        <ul className='menu'>
            <li><Link to='main'>HOME</Link></li>
            <li><Link to='products'>MENU</Link></li>
            <li><Link to='about'>OUR STORY</Link></li>
            <li><Link to='contact'>CONTACT US</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
