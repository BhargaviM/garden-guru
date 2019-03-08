import React, { Component } from 'react';

class SaveButton extends Component {
    render() {
        return (
            <div className="control">
                <button className={`button is-primary  ${this.props.isLoading}`}
                    onClick={this.props.handleSubmit}
                    disabled={this.props.disabled} >
                    <span>{this.props.text}</span>
                </button>
            </div>
        );
    }
}

export default SaveButton;
