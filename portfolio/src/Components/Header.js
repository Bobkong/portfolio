import './Header.css';
import React from 'react';
import logo from '../Assets/logo.png';
function Header() {
    return (
    <div id="header-div">
        <img src={logo} alt="website logo" className='header-logo'/>
        <div className='navDiv'>
            <li className='navItem selected'><a href=''>WORK</a></li>
            <li className='navItem unSelected'><a href='https://www.lingshuangkong.com/about'>ABOUT</a></li>
            <li className='navItem unSelected'><a href='https://www.lingshuangkong.com/about'>RESUME</a></li>
        </div>
    </div>);
}

window.onscroll = function() {
    scroll()
};

function scroll() {

}

export default Header;