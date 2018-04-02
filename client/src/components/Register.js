import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions'
import '../App.css'

class Register extends React.Component {
  constructor() {
		super()

		this.handleRegister = this.handleRegister.bind(this)
  }
  handleRegister(event) {
    event.preventDefault();
    const usernameInput = this.input.value;
    const passwordInput = this.input2.value;
    this.props.dispatch(registerUser(usernameInput, passwordInput));
  }

  render() {
    return (
      <div>
      <div className="empty-register-space"></div>
      <div className="register-container js-register-container register-overlay js-register-overlay">

        <h3 className="login-logo js-login-logo">Register</h3>
        <form className="login-form register-form js-register-form" onSubmit={(e) => this.handleRegister(e)}>
          <div className="form-group">
            <input className="floating-label-input" name="username" id="register_form_username" type="text" required ref={input => this.input = input} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="floating-label" htmlFor="register_form_username">New Username</label>
          </div>

          <div className="form-group">
            <input className="floating-label-input" name="password" id="register_form_password" type="password" required ref={input => this.input2 = input} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="floating-label" htmlFor="register_form_password">New Password</label>
          </div>
          <button id="create-username" className="register-button js-login-button" type="submit">Create</button>
        </form>
          <div className="error-message js-error-message"></div>
          <div className="success-message js-success-message"></div>
      </div>
    </div>
    )
  }

}

export default connect()(Register);
