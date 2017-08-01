import React from 'react'
import { connect } from 'react-redux'
import '../App.css'

class Register extends React.Component {



  render() {
    return (
      <div>
      <div className="empty-register-space"></div>
      <div className="register-container js-register-container register-overlay js-register-overlay">

        <h3 className="login-logo js-login-logo">Register</h3>
        <form className="login-form register-form js-register-form">
          <div className="form-group">
            <input className="floating-label-input" name="username" id="register_form_username" type="text" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="floating-label" for="register_form_username">New Username</label>
          </div>

          <div className="form-group">
            <input className="floating-label-input" name="password" id="register_form_password" type="password" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="floating-label" for="register_form_password">New Password</label>
          </div>
          <button id="create-username" className="login-button js-login-button" type="submit">Create</button>
        </form>

    </div>
    </div>
    )
  }

}

export default connect()(Register)
