import React, { Component } from 'react';
import CareCard from './CareCard';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

class PlantCare extends Component {
    render() {
        const care = this.props.care;
        const francoisFontStyle = { 'fontFamily': 'Francois One, sans-serif' };
        const sloboFontStyle = { fontFamily: 'Slobo' };
        const backgroundStyle = {
            backgroundImage: "url('background-backlight.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%"
        }

        return (
            <div style={backgroundStyle}>
            <div className="section container">
                <Element name="myScrollToElement"></Element>
                <h2 className="title is-size-3" style={francoisFontStyle}>Here is your custom calendar:</h2>
                <h3 className="subtitle is-size-5" style={sloboFontStyle}>Relax and enjoy your garden now. We will send you a list of tasks every month.</h3>
                <div className="">
                    {care.map((monthlyCare, index) => {
                        return <CareCard careForMonth={monthlyCare}/>
                    })}
                </div>
            </div>
            </div>
        );
    }
}

export default PlantCare;
