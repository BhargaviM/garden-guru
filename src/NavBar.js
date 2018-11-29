import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        // Nav bar copied from https://github.com/dansup/bulma-templates/blob/master/templates/tabs.html
        return (
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
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
