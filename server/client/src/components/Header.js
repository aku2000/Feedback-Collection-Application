import React, { Component } from 'react';
import logo from '../images/Logo.png';

class Header extends Component 
{
    render()
    {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">
                        <img src={logo} alt="Logo" height="auto" width="68" />
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Login with Google</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;