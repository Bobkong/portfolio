import './Header.css';
import React from 'react';
import logo from '../Assets/logo.png';
import {NavLink } from 'react-router-dom';

function Header() {
    return (
    <div id="header-div">
        <NavLink to={"/"}>
            <img src={logo} alt="website logo" className='header-logo'/>
          </NavLink>
        <div className='navDiv'>
        <NavLink to={"/"}>
            <li className='navItem selected'>WORK</li>
        </NavLink>
        <a href='https://lingshuang.webflow.io/about'><li className='navItem unSelected'>ABOUT</li></a>
        <a href='https://drive.google.com/file/d/10k0xKttE0a8xR5s4oG6pl8-8hOplCFbq/view?usp=sharing' target={'_blank'}><li className='navItem unSelected'>RESUME</li></a>
        </div>
    </div>);
}

export default Header;