import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

class PlantSelector extends Component {
    state = {
        groupedOptions: [],
        plantCategories: {},
        dontSeeAPlantLinkState: '',
        plantsInputBoxState: 'is-hidden'
    }

    showPlantsInputBox = event => {
        this.setState({ dontSeeAPlantLinkState: 'is-hidden' });
        this.setState({ plantsInputBoxState: '' });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/plant-categories')
            .then(res => {
                const categories = res.data.categories;
                const plantUrls = [];

                // const plantsUrls = [];
                Object.keys(categories).forEach(cat => {
                    plantUrls.push('http://localhost:4000/plants/'+cat);
                });

                return axios.all(plantUrls.map(l => axios.get(l)));
                // return axios.get('http://localhost:4000/plants'); // load plants dropdown
            })
            .then(axios.spread((...responses) => {
                // load plants dropdown
                let groupedOptions = [];
                if(Array.isArray(responses) && responses.length > 0) {
                    responses.forEach(res => {
                        if ('data' in res && 'plants' in res.data) {
                            groupedOptions.push({
                                label: res.data.tag,
                                options: res.data.plants.map(obj => {
                                    return {label: obj.name, value: obj._id};
                                })
                            });
                        } else {
                            console.log("No Plants for tag");
                        }
                    });
                } else {
                    //TODO return nothing
                }

                this.setState({ groupedOptions: groupedOptions });
            }))
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        const groupStyles = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        };
        const groupBadgeStyles = {
            backgroundColor: '#EBECF0',
            borderRadius: '2em',
            color: '#172B4D',
            display: 'inline-block',
            fontSize: 12,
            fontWeight: 'normal',
            lineHeight: '1',
            minWidth: 1,
            padding: '0.16666666666667em 0.5em',
            textAlign: 'center',
        };
        const showPlantsTextBoxStyles = {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
        const plantNamesTextBoxStyles = {
            marginTop: '.5em'
        }

        const formatGroupLabel = data => (
            <div style={groupStyles}>
                <span>{data.label}</span>
                <span style={groupBadgeStyles}>{data.options.length}</span>
            </div>
        );

        return (
            <div className="field">
                <label className="label">Select plants in your garden</label>
                <div className="control">
                    <Select
                        value={this.props.selectedPlants}
                        onChange={this.props.handlePlantsSelectionChange}
                        options={this.state.groupedOptions}
                        formatGroupLabel={formatGroupLabel}
                        isMulti
                    />
                </div>
                <div
                    className={"link-button is-pulled-right is-size-7 has-text-info " + this.state.dontSeeAPlantLinkState}
                    onClick={this.showPlantsInputBox}
                    style={showPlantsTextBoxStyles}
                    >Don't see a plant?</div>
                <div className={this.state.plantsInputBoxState}
                    style={plantNamesTextBoxStyles}>
                    <input className='input' placeholder="Enter plant names seperated by a comma. e.g: Rose, Tulip"
                        onChange={this.props.setPlantNamesText}/>
                </div>
            </div>
        );
    }
}

export default PlantSelector;
