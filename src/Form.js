import React, { Component } from 'react';
import PlantSelector from './form-components/PlantSelector';
import ZoneSelector from './form-components/ZoneSelector';
import Names from './form-components/Names';
import UserEmail from './form-components/UserEmail';
import SavePlantsSelection from './form-components/SavePlantsSelection';
import SaveStatus from './form-components/SaveStatus';
import PlantCare from './plant-care/PlantCare';
import axios from 'axios';

function formFullName (firstName, lastName) {
    let fullName = '';
    if (firstName) {
        fullName = firstName;
    }
    if (lastName) {
        if (fullName !== '') {fullName += ' '} // Add a space between first name and last name
        fullName = fullName + lastName;
    }
    return fullName;
}

class Form extends Component {
    state = {
        selectedPlants: [], // save a list of selected plants
        saveStatus: 'none',
        selectedZone: '',
        firstName: '',
        lastName: '',
        isEmailValid: true,
        email: '',
        submitEnabled: false,
        plantsCare: false,
        isLoading: ''
    }

    // An event to pass along to the <PlantSelector />
    // Update the selected plants
    handlePlantsSelectionChange = (selectedPlants) => {
        this.setState({ selectedPlants });
        this.setState({ saveStatus: 'none' });
    }

    // Save Zone Selected in state
    handleZoneChange = selectedZone => {
        this.setState({ selectedZone });
        this.setState({ saveStatus: 'none' });
    }

    setFirstNameState = event => {
        this.setState({ firstName: event.target.value });
    }

    setLastNameState = event => {
        this.setState({ lastName: event.target.value });
    }

    // Save Email in state
    setEmailState= emailObj => {
        this.setState({email: emailObj.email});
        this.setState({isEmailValid: emailObj.isEmailValid})
    }

    // Check if all the fields are selected
    componentDidUpdate = (a, b) => {
        const submitEnabled = this.state.submitEnabled;
        // Plants
        if (Array.isArray(this.state.selectedPlants) && (this.state.selectedPlants.length === 0)) {
            // Update the state only if its different from the current state
            // so as not to create an infinite loop.
            if (submitEnabled === false) {
                return;
            } else {
                this.setState({submitEnabled: false});
                return;
            }
        }

        // Zone
        if (this.state.selectedZone === undefined || this.state.selectedZone === '') {
            if (submitEnabled === false) {
                return;
            } else {
                this.setState({submitEnabled: false});
                return;
            }
        }

        // Email
        if (this.state.email === '' || this.state.email === undefined || !this.state.isEmailValid) {
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

    // An event to pass along to the <SavePlantsSelection />
    // Submit the form
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            plantsCare: false,
            isLoading: 'is-loading'
        });

        const fullName = formFullName(this.state.firstName, this.state.lastName);

        const request = {
            plants: this.state.selectedPlants.map(plant => {
                return plant.value;
            }),
            zone: this.state.selectedZone.value,
            email: this.state.email,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            full_name: fullName
        }
        axios.post('http://localhost:4000/plants', request)
            .then(res => {
                this.setState({saveStatus: 'success'});
                setTimeout(() => {
                    this.setState({saveStatus: 'none'});
                }, 5000);

                this.setState({
                    plantsCare: res.data.plantsCare,
                    isLoading: ''
                });
                console.log("POST successful.");
            })
            .catch(err => {
                this.setState({saveStatus: 'error'});
                console.log("POST failed.");
            });
    }

    render() {
        return (
            <div>
                <section className="section container">
                        <div className="columns">
                            <div className="column is-6 is-offset-3">
                                <div className="box">
                                    <PlantSelector
                                        selectedPlants={this.state.selectedPlants}
                                        handlePlantsSelectionChange={this.handlePlantsSelectionChange}/>
                                    <ZoneSelector
                                        selectedZone={this.state.selectedZone}
                                        handleZoneChange={this.handleZoneChange}/>
                                    <Names
                                        setFirstNameState={this.setFirstNameState}
                                        setLastNameState={this.setLastNameState}/>
                                    <UserEmail setEmailState={this.setEmailState}
                                        isEmailValid={this.state.isEmailValid} />
                                    <div className="field is-grouped has-text-centered">
                                        <SavePlantsSelection
                                            isLoading={this.state.isLoading}
                                            handleSubmit={this.handleSubmit}
                                            disabled={!this.state.submitEnabled}/>
                                        <SaveStatus saveStatus={this.state.saveStatus}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                </section>
                {this.state.plantsCare ? <section><PlantCare care={this.state.plantsCare}/></section> : ''}
            </div>
        );
    }
}

export default Form;