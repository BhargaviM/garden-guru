import React, { Component } from 'react';
import PlantSelector from './form-components/PlantSelector';
import ZoneZipcodeSelector from './form-components/ZoneZipcodeSelector';
import Names from './form-components/Names';
import UserEmail from './form-components/UserEmail';
import SaveButton from './form-components/SaveButton';
import SaveStatus from './form-components/SaveStatus';
import PlantCare from './plant-care/PlantCare';
import axios from 'axios';
import Scroll from 'react-scroll';

var scroller = Scroll.scroller;

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
        customPlants: '',
        saveStatus: 'none',
        selectedZone: '',
        // zipcode: '',
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

    // Save the plants input text box
    setPlantNamesText = event => {
        this.setState({ customPlants: event.target.value });
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

        // Either Zone or Zipcode is entered
        // if ((this.state.selectedZone === undefined || this.state.selectedZone === '') &&
        // (this.state.zipcode === '' || this.state.zipcode === undefined || !this.state.zipcode)) {
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

    // An event to pass along to the <SaveButton />
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
            custom_plants: this.state.customPlants,
            zone: this.state.selectedZone.value,
            // zipcode: this.state.zipcode,
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

                scroller.scrollTo('myScrollToElement', {
                    duration: 1500,
                    delay: 100,
                    smooth: true
                });
            })
            .catch(err => {
                this.setState({
                    saveStatus: 'error',
                    isLoading: ''
                });
                console.log("POST failed.");
            });
    }

    render() {
        const sectionStyle = {backgroundColor: "#F3FFEB", padding: "2rem 0px"};
        const francoisFontStyle = {fontFamily: "Francois One, sans-serif"};
        const robotoFontStyle = {fontFamily: "Roboto"};
        const labelStyle = {fontFamily: "Slabo", fontSize: "1.1rem"};

        return (
            <div>
                <div style={sectionStyle}>
                    <section className="section container">
                        <div className="columns">
                            <div className="column is-6 is-offset-3">
                                <h2 className="title is-size-2 has-text-centered" style={francoisFontStyle}>LET'S GET STARTED</h2>
                                <h2 className="subtitle is-size-6 has-text-centered" style={robotoFontStyle}>Tell us a little bit about your garden to see your customized calendar.</h2>
                                <div className="box">
                                    <PlantSelector
                                        labelStyle = {labelStyle}
                                        selectedPlants={this.state.selectedPlants}
                                        handlePlantsSelectionChange={this.handlePlantsSelectionChange}
                                        setPlantNamesText={this.setPlantNamesText}/>
                                    <ZoneZipcodeSelector
                                        labelStyle = {labelStyle}
                                        selectedZone={this.state.selectedZone}
                                        handleZoneChange={this.handleZoneChange}/>
                                    <Names
                                        labelStyle = {labelStyle}
                                        setFirstNameState={this.setFirstNameState}
                                        setLastNameState={this.setLastNameState}/>
                                    <UserEmail setEmailState={this.setEmailState}
                                        labelStyle = {labelStyle}
                                        isEmailValid={this.state.isEmailValid}/>
                                    <div className="field is-grouped has-text-centered">
                                        <SaveButton
                                            labelStyle = {labelStyle}
                                            isLoading={this.state.isLoading}
                                            handleSubmit={this.handleSubmit}
                                            disabled={!this.state.submitEnabled}
                                            text="See my custom calendar"/>
                                        <SaveStatus saveStatus={this.state.saveStatus}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {this.state.plantsCare ? <section><PlantCare care={this.state.plantsCare}/></section> : ''}
            </div>
        );
    }
}

export default Form;
