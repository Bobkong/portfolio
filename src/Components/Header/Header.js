import './Header.css';
import React from 'react';
import logo from '../../Assets/logo-page.png';
import {NavLink } from 'react-router-dom';
import {useState, useContext} from 'react';
import burger from '../../Assets/hamburger.svg'
import HoverText from '../HoverText/HoverText';
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";

const Header = () => {
    const [showNav, setShowNav] = useState(false)

    const handleShowNavbar = () => {
        setShowNav(!showNav)
    }

    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const imageEnter = () => {
      cursorStyleHandler("text");
    };
  
    const imageLeave = () => {
      cursorStyleHandler("default");
    };

    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <NavLink to="/" onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
                        <img src={logo} alt='logo' className='logo-icon'/>
                    </NavLink>
                </div>

                <div className='menu' onClick={handleShowNavbar}>
                <img src={burger} alt='menu icon' className='menu-icon'/>
                </div>

                <div className={`nav-elements ${showNav && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/" end>
                                <HoverText text = "HOME"/>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/uiux" end>
                                <HoverText text = "DESIGN WORK"/>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dev" end>
                                <HoverText text = "DEVELOPMENT WORK"/>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/life" end>
                                <HoverText text = "LIFE"/>
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}



export default Header