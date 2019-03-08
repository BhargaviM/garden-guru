import React, { Component } from 'react';

class Names extends Component {
    render() {
        return (
            <div className="field is-grouped">
                <div className="control is-expanded">
                        <label className="label" style={this.props.labelStyle}>First Name </label>
                        <input className='input'
                            onChange={this.props.setFirstNameState}/>
                </div>
                <div className="control is-expanded">
                        <label className="label" style={this.props.labelStyle}>Last Name </label>
                        <input className='input'
                            onChange={this.props.setLastNameState}/>
                </div>
            </div>

        );
    }
}

export default Names;
