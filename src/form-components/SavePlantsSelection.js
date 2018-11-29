import React, { Component } from 'react';

class SavePlantsSelection extends Component {
    render() {
        return (
            <div className="control">
                <button className={`button is-link  ${this.props.isLoading}`}
                    onClick={this.props.handleSubmit}
                    disabled={this.props.disabled} >
                    <span>Submit</span>
                </button>
            </div>
        );
    }
}

export default SavePlantsSelection;
