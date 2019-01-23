import React, {Component} from 'react';
// import Logo from './images/green-logo.png';
import Logo from './images/watering-can.png';

class NavBar extends Component {
    render() {
        // CSS styling for the Logo on the top left
        const imgStyle = { 'maxHeight': '42px', 'paddingRight': '5px'};
        const spanStyle = { 'color': '#c3ef72' };

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
                                        <li className="is-active"><a href="/">Home</a></li>
                                        <li><a href="/">Team</a></li>
                                        <li><a href="/">Help</a></li>
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
