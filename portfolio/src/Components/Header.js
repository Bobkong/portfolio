import './Header.css';
import React from 'react';
import logo from '../Assets/logo.png';
import {NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
      super(props)
    }
    
    render() {
        return (
            <div id="header-div">
                <NavLink to={"/"} onClick = {this.selectWork}>
                    <img src={logo} alt="website logo" className='header-logo'/>
                    </NavLink>
                <div className='navDiv'>
                <NavLink to={"/"} onClick = {this.selectWork}>
                    <li className='navItem selected' id='work'>WORK</li>
                </NavLink>
                <NavLink to={"/about"} onClick = {this.selectAbout}>
                    <li className='navItem unSelected' id='about'>ABOUT</li>
                </NavLink>
                <a href='https://drive.google.com/file/d/10k0xKttE0a8xR5s4oG6pl8-8hOplCFbq/view?usp=sharing' target={'_blank'}><li className='navItem unSelected'>RESUME</li></a>
                </div>
            </div>);
    }

    selectWork = () => {
        document.getElementById('work').className = 'navItem selected'
        document.getElementById('abuot').className = 'navItem unSelected'
    }

    selectAbout = () => {
        document.getElementById('about').className = 'navItem selected'
        document.getElementById('work').className = 'navItem unSelected'
    }
}
   