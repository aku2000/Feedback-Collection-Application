import React, { Component } from 'react';

class Header extends Component 
{
    render()
    {
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="left brand-logo">
                        Feedback Hut
                        <img src="../images/Logo.png" height="auto" width="auto" />
                    </a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="#">Login with Google</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;