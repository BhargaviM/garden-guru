import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <section className="hero is-primary is-bold">
                        <NavBar />
                        <Header />
                    </section>
                    <Form />
                </div>
                <div><Footer /></div>
            </div>
        );
    }
}

export default App;
