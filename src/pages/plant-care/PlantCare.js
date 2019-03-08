import React, { Component } from 'react';
import CareCard from './CareCard';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

class PlantCare extends Component {
    render() {
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
                <section className="columns">
                    <CareCard careForMonth={this.props.care.january} month="JANUARY"/>
                    <CareCard careForMonth={this.props.care.february} month="FEBRAURY"/>
                    <CareCard careForMonth={this.props.care.march} month="MARCH"/>
                </section>
                <section className="columns">
                    <CareCard careForMonth={this.props.care.april} month="APRIL"/>
                    <CareCard careForMonth={this.props.care.may} month="MAY"/>
                    <CareCard careForMonth={this.props.care.june} month="JUNE"/>
                </section>
                <section className="columns">
                    <CareCard careForMonth={this.props.care.july} month="JULY"/>
                    <CareCard careForMonth={this.props.care.august} month="AUGUST"/>
                    <CareCard careForMonth={this.props.care.september} month="SEPTEMBER"/>
                </section>
                <section className="columns">
                    <CareCard careForMonth={this.props.care.october} month="OCTOBER"/>
                    <CareCard careForMonth={this.props.care.november} month="NOVEMBER"/>
                    <CareCard careForMonth={this.props.care.december} month="DECEMBER"/>
                </section>
            </div>
            </div>
        );
    }
}

export default PlantCare;
