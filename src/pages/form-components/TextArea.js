import React, { Component } from 'react';

class TextArea extends Component {
    render() {
        return (
            <div className="field">
                <label className="label">How can we help?</label>
                <div className="control">
                    <textarea className="textarea"
                        onChange={this.props.setTextAreaChange}></textarea>
                </div>
            </div>
        );
    }
}

export default TextArea;
