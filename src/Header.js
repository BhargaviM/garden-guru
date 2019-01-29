import React, { Component } from 'react';

class Header extends Component {
    render() {
        const h1Style = { 'fontFamily': 'Francois One, sans-serif' };
        const aStyle = { 'textDecoration': 'underline'};

        return (
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-uppercase is-size-2" style={h1Style}>
                        We will help your garden flourish!
                    </h1>
                    <h2 className="subtitle">
                        Taking care of a garden is a lot of work. You have to mulch, fertilize, prune different plants at different times. Every plant needs a specific fertilizer. Tell us which plants you have in your garden and we will send you timely reminders to prune, mulch and fertilize them.
                        &nbsp; <a href='/about-us' style={aStyle} className="is-italic is-size-6" onClick={this.props.handleAboutUsClick}>Read More ></a>
                    </h2>
                </div>
            </div>
        );
    }
}

export default Header;
