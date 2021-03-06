import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        const footerStyle = {
            backgroundColor: '#fff',
            color: '#0a0a0a'
        }

        return (
            <footer className="footer" style={footerStyle}>
                <div className="content has-text-centered">
                    <p>
                        <strong>Garden Center</strong> by <span className="has-text-info">Plant Protector Inc</span>. The source code is licensed by
                        <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </footer>
        );
    }
}

export default HomePage;
