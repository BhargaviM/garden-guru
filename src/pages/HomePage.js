import React, { Component } from 'react';
import Header from '../Header';
import WhatWeDo from './WhatWeDo';
import PlantSelectionForm from './PlantSelectionForm';

class HomePage extends Component {
    render() {
        const heroStyle = {
            backgroundImage: "url('background.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%"
        }
        // backgroundColor: "#e1ffec"
        const whatWeDoStyle = {
            backgroundImage: "url('green-background.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%"
        };

        return (
            <div>
                <section className="hero is-fullheight" style={heroStyle}>
                    <Header handleAboutUsClick={this.props.handleAboutUsClick}/>
                </section>
                <section className="section" style={whatWeDoStyle}>
                    <WhatWeDo />
                </section>
                <PlantSelectionForm />
            </div>
        );
    }
}

export default HomePage;
