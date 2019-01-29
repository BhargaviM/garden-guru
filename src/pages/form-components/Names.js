import React, { Component } from 'react';

class Names extends Component {
    render() {
        return (
            <div className="field is-grouped">
            <div className="control is-expanded">
                    <label className="label">First Name </label>
                    <input className='input'
                        onChange={this.props.setFirstNameState}/>

            </div>
            <div className="control is-expanded">
                    <label className="label">Last Name </label>
                    <input className='input'
                        onChange={this.props.setLastNameState}/>

            </div>
            </div>

        );
    }
}

export default Names;
