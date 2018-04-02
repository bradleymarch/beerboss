import React from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../actions'
import '../App.css'

class Login extends React.Component {

  constructor() {
		super()

		this.handleLogin = this.handleLogin.bind(this)
  }
  handleLogin(event) {
    event.preventDefault();
    const usernameInput = this.input.value;
    const passwordInput = this.input2.value;
    this.props.dispatch(loginUser(usernameInput, passwordInput));
  }

  render() {

    return (
      <div id="login_page">
        <div className="empty-login-space"></div>
    		<div className="login-container js-login-container login-overlay js-login-overlay">

    			<h3 className="login-logo js-login-logo">Login</h3>
    			<form className="login-form js-login-form" onSubmit={(e) => this.handleLogin(e)}>
    				<div className="form-group">
    					<input className="floating-label-input" id="login_form_username" type="text" required ref={input => this.input = input} />
    					<span className="highlight"></span>
    					<span className="bar"></span>
    					<label className="floating-label" htmlFor="login_form_username">Username</label>
    				</div>

    				<div className="form-group">
    					<input className="floating-label-input" id="login_form_password" type="password" required ref={input => this.input2 = input} />
    					<span className="highlight"></span>
    					<span className="bar"></span>
    					<label className="floating-label" htmlFor="login_form_password">Password</label>
    				</div>
    				<button className="login-button js-login-button" type="submit">ENTER</button>
    			</form>

    			<a href="/register" className="register js-register">Not registered? Click here</a>
    			<div className="error-message js-error-message"></div>
          </div>
        </div>
    )
  }

}

export default connect()(Login)
