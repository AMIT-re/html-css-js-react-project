import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.jpeg'
import searchicon from '../../assets/searchicon.png'
import smileicon from '../../assets/smileicons.png'
import bell from '../../assets/bell.png'
import Arrow from '../../assets/arrow.png'
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
            <div className="profile-wrapper">
            <img src={smileicon} alt ="smile icon" className="profile-icon"/>
            <img src={Arrow} alt="caret_icon" className="careticon"/>
            <div className="dropdown">
                <p>
                    Sign Out from Netflix
                </p>

            </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar
