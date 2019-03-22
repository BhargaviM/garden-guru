import React, { Component } from 'react';

class CareCard extends Component {
    render() {
        let careByPlant = this.props.careForMonth;
        const month = careByPlant[0].month;
        const paddingStyle= {
            paddingBottom: '1em'
        };
        const monthStyle = {
            fontFamily: 'Francois One, sans-serif',
            textDecoration: 'underline'
        };

        return (
            <div className="box" style={paddingStyle}>
                <h5 className="title is-5 is-success is-capitalized" style={monthStyle}>{month}</h5>
                <table className="table is-striped">
                    <tbody>
                        {careByPlant.map((plant, index) => {
                            return <CareCardPlant plant={plant}/>;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

class CareCardPlant extends Component {
    render() {
        const plant = this.props.plant;
        if (plant.hasOwnProperty("fertilizer")) {
            if (plant.fertilizer !== undefined){
                return (
                    <tr>
                        <td className="is-capitalized has-text-weight-bold">{this.props.plant.plant}:</td>
                        <td>
                            {this.props.plant.care} {this.props.plant.fertilizer.care}
                            <a href={this.props.plant.fertilizer.link} target="_blank" rel="noopener noreferrer">{this.props.plant.fertilizer.linkText}</a>
                        </td>
                    </tr>
                );
            }
        } else {
            return (
                <tr>
                    <td className="is-capitalized has-text-weight-bold">{this.props.plant.plant}:</td>
                    <td>{this.props.plant.care}</td>
                </tr>
            );
        }
    }
}

export default CareCard;
