import React, { Component } from 'react'
import logo from '../img/logo.png'
import '../styles/Navbar.css'

class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar">
                <a href="">
                    <img className="logoNavbar" src={logo} alt="logoNavbar"/>
                </a>
            </nav>
         );
    }
}
 
export default Navbar;