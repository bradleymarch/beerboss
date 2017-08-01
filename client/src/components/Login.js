import React from 'react'
import { connect } from 'react-redux';
import '../App.css'

class Login extends React.Component {

  handleLogIn(event) {
    event.preventDefault();
    this.props.dispatch()//import action then put in action to use for login JS
  }

  render() {

    return (
      <div id="login_page">
        <div className="empty-login-space"></div>
    		<div className="login-container js-login-container login-overlay js-login-overlay">

    			<h3 className="login-logo js-login-logo">Login</h3>
    			<form className="login-form js-login-form" onSubmit={() => this.handleLogIn()}>
    				<div className="form-group">
    					<input className="floating-label-input" id="login_form_username" type="text" required />
    					<span className="highlight"></span>
    					<span className="bar"></span>
    					<label className="floating-label" for="login_form_username">Username</label>
    				</div>

    				<div className="form-group">
    					<input className="floating-label-input" id="login_form_password" type="password" required />
    					<span className="highlight"></span>
    					<span className="bar"></span>
    					<label className="floating-label" for="login_form_password">Password</label>
    				</div>
    				<button className="login-button js-login-button" type="submit">Enter</button>
    			</form>

    			<a href="/register" className="register js-register">Not registered? Click here</a>
    			<div className="error-message js-error-message"></div>
          </div>
        </div>
    )
  }

}

export default connect()(Login)
