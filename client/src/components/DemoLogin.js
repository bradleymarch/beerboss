import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class DemoLogin extends React.Component {

  constructor() {
		super()
		this.handleLogin = this.handleLogin.bind(this)
  }
  handleLogin(event) {
    event.preventDefault();
    const usernameInput = '';
    const passwordInput = '';
    this.props.dispatch(loginUser(usernameInput, passwordInput));
  }

  render() {
    return (
      <div id="login_page">
        <div className="empty-login-space"></div>
    		<div className="login-container js-login-container login-overlay js-login-overlay">
    			<h3 className="login-logo js-login-logo">Demo Login</h3>
    			<form className="login-form js-login-form" onSubmit={(e) => this.handleLogin(e)}>
    				  <div style={{padding: '40px', color: 'white'}}>Click ENTER to proceed to secure login. Use credentials below.<br /><br />
                <div>Username: Boss</div>
    					  <div>Password: 123</div>
              </div>
    				<button className="login-button js-login-button" type="submit">ENTER</button>
    			</form>
          </div>
        </div>
    )
  }
}

export default connect()(DemoLogin)
