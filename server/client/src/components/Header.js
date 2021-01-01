import React, { Component } from 'react';
import logo from '../images/Logo.png';
import { connect } from 'react-redux'
class Header extends Component 
{
    renderContent()
    {
        switch (this.props.auth)
        {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login With Google</a>
                    </li>
                );
            default:
                return <li><a>Logout</a></li>;
        }
    }
    render()
    {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">
                        <img src={logo} alt="Logo" height="auto" width="68" />
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth })
{
    return { auth };
}

export default connect(mapStateToProps)(Header);