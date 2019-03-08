import React, { Component } from 'react';
import Select from 'react-select';
import SaveButton from '../form-components/SaveButton';
import SaveStatus from '../form-components/SaveStatus';
import axios from 'axios';

class AddPlant extends Component {
    state = {
        'name': '',
        'description': '',
        'tags': '',
        'category': '',
        'categoriesOptions': [],
        'submitEnabled': false,
        'isLoading': false,
        'saveStatus': ''
    }

    setNameState = event => {
        this.setState({ name: event.target.value });
    }

    setDescriptionState = event => {
        this.setState({ description: event.target.value });
    }

    setCategoryState = (category) => {
        this.setState({ category: category.value });
    }

    setTagsState = event => {
        this.setState({ tags: event.target.value });
    }

    // Check if all the required fields are set
    componentDidUpdate = () => {
        const submitEnabled = this.state.submitEnabled;
        const fieldsShouldNotBeEmpty = [this.state.name, this.state.description, this.state.category];

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
        // Convert tags into an array
        let tags = this.state.tags.split(',');
        tags.push(this.state.category);
        tags = tags.map(i=>i.trim());

        const request = {
            name: this.state.name,
            description: this.state.description,
            tags: tags
        };

        axios.post('http://localhost:4000/plants/new-plant', request)
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

    componentDidMount() {
        axios.get('http://localhost:4000/plant-categories')
            .then(res => {
                const categories = res.data.categories;
                const options = [];
                for (let [cat, catData] of Object.entries(categories)) {
                    options.push({
                        label: catData.label,
                        value: cat
                    });
                }
                this.setState({ categoriesOptions: options });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return (
            <div className="box">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className='input' onChange={this.setNameState}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <input className='input' onChange={this.setDescriptionState}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Category</label>
                    <div className="control">
                        <Select
                            value={this.category}
                            onChange={this.setCategoryState}
                            options={this.state.categoriesOptions}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Tags</label>
                    <div className="control">
                        <input className='input' onChange={this.setTagsState}/>
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

export default AddPlant;
