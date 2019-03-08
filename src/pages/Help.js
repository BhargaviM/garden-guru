import React, { Component } from 'react';
import Names from './form-components/Names';
import UserEmail from './form-components/UserEmail';
import TextArea from './form-components/TextArea';
import SaveButton from './form-components/SaveButton';
import SaveStatus from './form-components/SaveStatus';
import axios from 'axios';

// TODO Add to Utils.js and reuse it in PlantSelectionForm.js
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

class Help extends Component {
    state = {
        firstName: '',
        lastName: '',
        isEmailValid: true,
        email: '',
        helpText: '',
        submitEnabled: false,
        isLoading: '',
        saveStatus: 'none',
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
        this.setState({isEmailValid: emailObj.isEmailValid});
    }

    setTextAreaChange = event => {
        this.setState({ helpText: event.target.value });
    }

    // Check if all the required fields are set
    componentDidUpdate = (a, b) => {
        const submitEnabled = this.state.submitEnabled;
        // Email
        if (this.state.email === '' || this.state.email === undefined || !this.state.isEmailValid) {
            if (submitEnabled === false) {
                return;
            } else {
                this.setState({submitEnabled: false});
                return;
            }
        }

        // TextArea
        if (this.state.helpText === '' || this.state.email === undefined) {
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
            isLoading: 'is-loading'
        });

        const fullName = formFullName(this.state.firstName, this.state.lastName);

        const request = {
            email: this.state.email,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            full_name: fullName,
            message: this.state.helpText
        }
        axios.post('http://localhost:4000/helps/new', request)
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
                this.setState({
                    saveStatus: 'error',
                    isLoading: ''
                });
                console.log("POST failed.");
            });
    }

    render() {
        const getInTouchStyle = { fontFamily: 'Francois One, sans-serif' };
        const textStyles = { marginBottom: '.75em' };

        return (
            <section className="hero is-light is-medium">
                <div className="hero-body">
                    <div className="container">
                        <div className="column is-8 is-offset-2">
                            <h2 className="title has-text-centered" style={getInTouchStyle}>
                            GET IN TOUCH!
                            </h2>
                            <div className="has-text-centered is-size-6 is-italic" style={textStyles}>
                                We are here to help. How can we help you?
                            </div>
                            <div className="box">
                                <Names
                                    setFirstNameState={this.setFirstNameState}
                                    setLastNameState={this.setLastNameState}/>
                                <UserEmail setEmailState={this.setEmailState}
                                    isEmailValid={this.state.isEmailValid} />
                                <TextArea setTextAreaChange={this.setTextAreaChange} />
                                <div className="field is-grouped has-text-centered">
                                    <SaveButton
                                        isLoading={this.state.isLoading}
                                        handleSubmit={this.handleSubmit}
                                        disabled={!this.state.submitEnabled}
                                        text="Submit"/>
                                    <SaveStatus saveStatus={this.state.saveStatus}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Help;
