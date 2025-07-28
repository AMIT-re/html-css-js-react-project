import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.jpeg'
import searchicon from '../../assets/searchicon.png'
import smileicon from '../../assets/smileicons.png'
import bell from '../../assets/bell.png'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="Navbar-left">
            <img src={Logo} alt="llogo " className="logoui" />
            <ul>
                <li>Home</li>
                <li>TV Shoes</li>
                <li>Movies</li>
                <li>My List</li>
                <li>Browse By Langauge</li>
            </ul>
        </div>
        <div className="Navbar-right">
            <img src={searchicon} alt="search-icon" className="searchbutton"/>
            <p>Children</p>
            <img src={bell} alt ="bell icon" className="bellicon"/>
            <img src={smileicon} alt ="smile icon"/>
        </div>

    </div>
  )
}

export default Navbar
