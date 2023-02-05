import './Header.css';
import React from 'react';
import logo from '../Assets/logo-page.png';
import {NavLink } from 'react-router-dom';
import {useState} from 'react';
import burger from '../Assets/hamburger.svg'

const Header = () => {
    const [showNav, setShowNav] = useState(false)

    const handleShowNavbar = () => {
        setShowNav(!showNav)
    }

    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <NavLink to="/">
                        <img src={logo} alt='logo' className='logo-icon'/>
                    </NavLink>
                </div>

                <div className='menu' onClick={handleShowNavbar}>
                <img src={burger} alt='menu icon' className='menu-icon'/>
                </div>

                <div className={`nav-elements ${showNav && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/" end>HOME</NavLink>
                        </li>

                        <li>
                            <NavLink to="/uxui">UX/UI DESIGN</NavLink>
                        </li>

                        <li>
                            <NavLink to="/mobileweb">MOBLIE & WEB DEV</NavLink>
                        </li>

                        <li>
                            <NavLink to="/arvr">AR/VR DEV</NavLink>
                        </li>

                        <li>
                            <NavLink to="/other">OTHER EXPERIMENTS</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header