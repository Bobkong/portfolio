import './Header.css';
import React from 'react';
import logo from '../Assets/logo.png';
function Header() {
    return (
    <div id="header-div">
        <img src={logo} alt="website logo" className='header-logo'/>
        <div className='navDiv'>
            <li className='navItem selected'><a href=''>WORK</a></li>
            <li className='navItem unSelected'><a href=''>ABOUT</a></li>
            <li className='navItem unSelected'><a href=''>RESUME</a></li>
        </div>
    </div>);
}

export default Header;