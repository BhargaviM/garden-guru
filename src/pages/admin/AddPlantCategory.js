import React, { Component } from 'react';
import SaveButton from '../form-components/SaveButton';
import SaveStatus from '../form-components/SaveStatus';
import axios from 'axios';

class AddPlantCategory extends Component {
    state = {
        'category': '',
        'label': '',
        'plural': '',
        'submitEnabled': false,
        'isLoading': false,
        'saveStatus': ''
    }

    setCategoryState = event => {
        this.setState({ category: event.target.value });
    }

    setlabelState = event => {
        this.setState({ label: event.target.value });
    }

    setPluralState = event => {
        this.setState({ plural: event.target.value });
    }

    // Check if all the required fields are set
    componentDidUpdate = () => {
        const submitEnabled = this.state.submitEnabled;
        const fieldsShouldNotBeEmpty = [this.state.category, this.state.label, this.state.plural];

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
        this.setState({
            isLoading: 'is-loading'
        });
        const category = this.state.category;
        const label = this.state.label;
        const plural = this.state.plural;
        const request = {};
        request[category] = {
            label,
            plural
        };

        axios.post('http://localhost:4000/plant-categories', request)
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
        return (
            <div className="box">
                <div className="field">
                    <label className="label">Category</label>
                    <div className="control">
                        <input className='input' onChange={this.setCategoryState}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Label</label>
                    <div className="control">
                        <input className='input' onChange={this.setlabelState}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Plural Word</label>
                    <div className="control">
                        <input className='input' onChange={this.setPluralState}/>
                    </div>
                </div>

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

export default AddPlantCategory;
