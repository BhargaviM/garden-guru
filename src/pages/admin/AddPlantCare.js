import React, { Component } from 'react';
import Select from 'react-select';
import ZoneZipcodeSelector from '../form-components/ZoneZipcodeSelector';
import SaveButton from '../form-components/SaveButton';
import SaveStatus from '../form-components/SaveStatus';
import axios from 'axios';

class AddPlantCare extends Component {
    state = {
        'plant': '',
        'month': '',
        'care': [],
        'zone': '',
        'plantsOptions': [],
        'monthsOptions': [],
        'zonesOptions': [],
        'submitEnabled': false,
        'isLoading': false,
        'saveStatus': ''
    }

    handlePlantState = plant => { this.setState({ plant }) };
    handleMonthState = month => { this.setState({ month }) };
    handleCareState = event => { this.setState({ care: event.target.value }) };
    handleZoneChange = zone => { this.setState({ zone }) };

    // Check if all the required fields are set
    componentDidUpdate = () => {
        const submitEnabled = this.state.submitEnabled;
        const fieldsShouldNotBeEmpty = [this.state.plant, this.state.month, this.state.zone];

        // Check if any of the above fields is empty
        for (let i=0; i<fieldsShouldNotBeEmpty.length; i++) {
            const field = fieldsShouldNotBeEmpty[i];

            // Disable submit and return if field is empty
            if (field === '' || field === undefined || !field) {
                if (submitEnabled === false) {
                    return;
                } else {
                    this.setState({submitEnabled: false});
                    return;
                }
            }
        }

        // Care
        if (this.state.care.length === 0) {
            if (submitEnabled === false) {
                return;
            } else {
                this.setState({submitEnabled: false});
                return;
            }
        }

        // All clear. Enable Submit button
        if (submitEnabled === true) {
            return;
        } else {
            this.setState({submitEnabled: true});
            return;
        }
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    componentDidMount() {
        // Load a list of available plants
        axios.get('http://localhost:4000/plants')
            .then(res => {
                const plants = res.data.plants;
                const options = [];
                for (var plant of plants) {
                    options.push({
                        label: plant.name,
                        value: plant._id
                    });
                }
                this.setState({ plantsOptions: options });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        // Months
        const monthsOptions = [
            {label: 'January', value: 'january'},
            {label: 'February', value: 'february'},
            {label: 'March', value: 'march'},
            {label: 'April', value: 'april'},
            {label: 'May', value: 'may'},
            {label: 'June', value: 'june'},
            {label: 'July', value: 'july'},
            {label: 'August', value: 'august'},
            {label: 'September', value: 'september'},
            {label: 'October', value: 'october'},
            {label: 'November', value: 'november'},
            {label: 'December', value: 'december'}
        ];
        this.setState({ monthsOptions });
    }

    render() {
        return (
            <div className="box">
                <div className="field">
                    <label className="label">Plant</label>
                    <div className="control">
                        <Select
                            value={this.state.plant}
                            onChange={this.handlePlantState}
                            options={this.state.plantsOptions}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Month</label>
                    <div className="control">
                        <Select
                            value={this.state.month}
                            onChange={this.handleMonthState}
                            options={this.state.monthsOptions}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Care</label>
                    <div className="control">
                        <input className='input' onChange={this.handleCareState}/>
                    </div>
                </div>

                <ZoneZipcodeSelector
                    labelStyle = {{}}
                    selectedZone={this.state.zone}
                    handleZoneChange={this.handleZoneChange}/>

                <div className="field is-grouped has-text-centered">
                    <SaveButton
                        isLoading={this.state.isLoading}
                        handleSubmit={this.handleSubmit}
                        disabled={!this.state.submitEnabled}
                        text="Save"/>
                    <SaveStatus saveStatus={this.state.saveStatus}/>
                </div>
            </div>
        );
    }
}

export default AddPlantCare;
