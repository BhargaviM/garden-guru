import React, { Component } from 'react';

class CareCard extends Component {
    render() {
        let careByPlant = this.props.careForMonth;

        return (
            <div className="column">
                <div className="box">
                    <h5 className="title is-5">{this.props.month}</h5>
                    <table className="table is-striped">
                        <tbody>
                            {careByPlant.map((plant, index) => {
                                return <CareCardPlant plant={plant.plant} plantCare={plant.care} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

class CareCardPlant extends Component {
    render() {
        return (
            <tr>
                <td className="is-capitalized has-text-weight-bold">{this.props.plant}:</td>
                <td>{this.props.plantCare.join(' ')}</td>
            </tr>
        );
    }
}

export default CareCard;
