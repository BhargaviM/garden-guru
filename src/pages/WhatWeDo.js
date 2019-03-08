import React, { Component } from 'react';
import Step1Img from '../images/step1.jpg';
import Step2Img from '../images/step2.jpg';
import Step3Img from '../images/step3.jpg';
// TODO replace Step 2 and Step 3 images with better images

class WhatWeDo extends Component {
    render() {
        const cardsStyle = { padding: "2rem" };
        const whatsToLoveStyle = { fontFamily: "Abril Fatface" };
        const robotoFontStyle = { fontFamily: "Roboto" };
        const sloboFontStyle = { fontFamily: "Slobo" };
        const addPadding = { padding: "2rem 0" };

        return (
            <div className="container has-text-centered" style={addPadding}>
                <h2 className="is-size-5 has-text-weight-bold" style={whatsToLoveStyle}>WHAT WE DO</h2>
                <h2 className="is-size-2" style={robotoFontStyle}>We will keep track of your garden for you!</h2>
                <div className="columns is-centered" style={cardsStyle}>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={Step1Img} alt=""/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <h3 className="title" style={robotoFontStyle}>Plants</h3>
                                <p style={sloboFontStyle}>Tell us which plants are in your Garden. This will help us make a customized calendar of garden care for you. If you have trouble finding what the name of a plant is, use this App.</p>{/* TODO Link to App */}
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={Step2Img} alt=""/>
                            </figure>
                        </div>
                            <div className="card-content">
                                <h3 className="title" style={robotoFontStyle}>Calendar</h3>
                                <p style={sloboFontStyle}>We will make a customized calendar for your garden. This will tell you when to fertilize, prune, mulch and perform other tasks. You can see your custom calendar on our website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={Step3Img} alt=""/>
                            </figure>
                        </div>
                            <div className="card-content">
                                <h3 className="title" style={robotoFontStyle}>Reminders</h3>
                                <p style={sloboFontStyle}>We will email your a short and sweet list of tasks to be performed in your garden. A lot of plant care information available on the internet now can be overwhelming. We will make that easy for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhatWeDo;
