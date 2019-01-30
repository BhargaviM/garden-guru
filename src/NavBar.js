import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        // CSS styling for the Logo on the top left
        const spanStyle = {
            'fontFamily': 'Oswald, sans-serif'
        };

        // Nav bar copied from https://github.com/dansup/bulma-templates/blob/master/templates/tabs.html
        return (
            <div className="hero-body">
                <nav className="navbar is-white">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <span className="has-text-weight-bold is-size-2" style={spanStyle}>GARDEN GURU</span>
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
