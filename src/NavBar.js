import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Logo from './images/watering-can.png';

class NavBar extends Component {
    render() {
        // CSS styling for the Logo on the top left
        const imgStyle = { 'maxHeight': '42px', 'paddingRight': '5px'};
        const spanStyle = {
            'fontFamily': 'Oswald, sans-serif',
            'textDecoration': 'underline'
        };

        // Nav bar copied from https://github.com/dansup/bulma-templates/blob/master/templates/tabs.html
        return (
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <img src={Logo} alt="Logo" style={imgStyle}/>
                                <span className="title has-text-weight-bold" style={spanStyle}>Garden Guru</span>
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="tabs is-right">
                                    <ul>
                                        <li className={this.props.homeNavStatus}><Link to='/' onClick={this.props.handleHomeClick}>Home</Link></li>
                                        <li className={this.props.aboutUsNavStatus}><Link to='/about-us' onClick={this.props.handleAboutUsClick}>About Us</Link></li>
                                        <li className={this.props.helpNavStatus}><Link to='/help' onClick={this.props.handleHelpClick}>Help</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default NavBar;
