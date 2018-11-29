import React, { Component } from 'react';

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

class UserEmail extends Component {
    handleEmailChange = event => {
        const email = event.target.value;
        const isValid = validateEmail(email);
        this.props.setEmailState({
            email: email,
            isEmailValid: isValid
        });
    }

    render() {
        return (
            <div className="field">
                {/* Email field validation: https://bulma.io/documentation/form/general/ */}
                <label className="label">Email </label>
                <div className="control">
                    <input className={this.props.isEmailValid ? 'input ' : 'input is-danger'} type="email"
                        placeholder="Email"
                        onChange={this.handleEmailChange}/>
                </div>
                <p className="help is-danger"></p>
            </div>
        );
    }
}

export default UserEmail;
