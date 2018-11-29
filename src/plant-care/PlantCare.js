import React, { Component } from 'react';
import CareCard from './CareCard';

class PlantCare extends Component {
    render() {
        return (
            <div className="section container">
                <h2 className="title is-3">Plant Care By Month:</h2>
                <section className="columns">
                    <CareCard careForMonth={this.props.care.january} month="January"/>
                    <CareCard careForMonth={this.props.care.february} month="Febraury"/>
                    <CareCard careForMonth={this.props.care.march} month="March"/>
                </section>
                <section className="columns">
                    <CareCard careForMonth={this.props.care.april} month="April"/>
                    <CareCard careForMonth={this.props.care.may} month="May"/>
                    <CareCard careForMonth={this.props.care.june} month="June"/>
                </section>
                <section className="columns">
                    <CareCard careForMonth={this.props.care.july} month="July"/>
                    <CareCard careForMonth={this.props.care.august} month="August"/>
                    <CareCard careForMonth={this.props.care.september} month="September"/>
                </section>
                <section className="columns">
                    <CareCard careForMonth={this.props.care.october} month="October"/>
                    <CareCard careForMonth={this.props.care.november} month="November"/>
                    <CareCard careForMonth={this.props.care.december} month="December"/>
                </section>
            </div>
        );
    }
}

export default PlantCare;
