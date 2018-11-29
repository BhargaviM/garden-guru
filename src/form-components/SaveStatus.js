import React, { Component } from 'react';

class SaveStatus extends Component {
    statusTexts = {
        none: '',
        success: 'Save successful.',
        error: 'Save Failed'
    }

    render() {
        // const saveStatus = this.props.saveStatus;
        const status = this.statusTexts[this.props.saveStatus];
        return (
            <div className="control">
                <span className="has-text-primary has-text-justified">
                    {status}
                </span>
            </div>
        );
    }
}

export default SaveStatus;
