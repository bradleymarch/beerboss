import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class Login extends React.Component {

  constructor() {
		super()
		this.handleLogin = this.handleLogin.bind(this)
  }
  handleLogin(event) {
    event.preventDefault();
    this.props.dispatch(loginUser());
  }
  render() {
    return (
      <div id="login_page">
        <div className="empty-login-space"></div>
    		<div className="login-container js-login-container login-overlay js-login-overlay">
    			<h3 className="login-logo js-login-logo">Login</h3>
    			<form className="login-form js-login-form" onSubmit={(e) => this.handleLogin(e)}>
    				<div style={{padding: '40px', color: 'white'}}>Click ENTER to proceed to secure login via Passport Authentication.</div>
    				<button className="login-button js-login-button" type="submit">ENTER</button>
    			</form>
    			<a href="/register" className="register js-register">Not registered? Click here</a>
    			<div className="error-message js-error-message"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {user: state.getUserReducer.user}

}

export default connect(mapStateToProps)(Login)
