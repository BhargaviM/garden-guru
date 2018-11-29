import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

class ZoneSelector extends Component {
    state = {
        options: []
    }

    componentDidMount() {
        // load plants dropdown
        axios.get('http://localhost:4000/zones')
            .then(res => {
                // load zones dropdown
                const options = res.data.zones;
                this.setState({ options });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return (
            <div className="field">
                <label className="label">Zone </label>
                <div className="control">
                    <Select
                        value={this.props.selectedZone}
                        onChange={this.props.handleZoneChange}
                        options={this.state.options}
                    />
                </div>
            </div>
        );
    }
}

export default ZoneSelector;
