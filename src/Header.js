import React, { Component } from 'react';

class Header extends Component {
    render() {
        const francoisFontStyle = { fontFamily: 'Francois One, sans-serif' };
        const sloboFontStyle = { fontFamily: 'Slobo' };
        const aStyle = { textDecoration: 'underline'};

        return (
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-uppercase is-size-2" style={francoisFontStyle}>
                        We will help your garden flourish!
                    </h1>
                    <h2 className="subtitle" style={sloboFontStyle}>
                        Taking care of a garden is a lot of work. Each plant is on its own schedule. You have to mulch, fertilize with a plant specific fertilizer and prune different plants at different times. Tell us which plants you have in your garden and we will send you timely reminders.
                        &nbsp; <a href='/about-us' style={aStyle} className="is-italic is-size-6" onClick={this.props.handleAboutUsClick}>Read More ></a>
                    </h2>
                </div>
            </div>
        );
    }
}

export default Header;
