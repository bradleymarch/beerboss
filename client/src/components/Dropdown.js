import React from 'react';
import {connect} from 'react-redux';
import logout from '../actions';

export class DropdownItem extends React.Component{
  render() {
    return (<li className="dropdown-option"
              onClick={this.props.click}>
                {this.props.label}
          </li>);
  }
}

class DropdownMenu extends React.Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
    location.href = "/";
  }

  render() {
    let className="dropdown-select";
    if (this.props.toggled) {
      className += " open";
    }

    return (
      <div>
        <ul className={className}>
          <li className="dropdown-option">
            <a href="/">Home</a>
          </li>
          <li className="dropdown-option">
            <a href="/demo-login">Demo</a>
          </li>
          <li className="dropdown-option">
            <a href="/login">Login</a>
          </li>
          <li className="dropdown-option">
            <a href="/#about">About</a>
          </li>
          {typeof this.props.user !== 'undefined' ? <li className="dropdown-option">
            <a href="/dashboard">Dashboard</a>
          </li> : <span></span>}
          <li className="dropdown-option">
            <a href="/register">Register</a>
          </li>
          <li className="dropdown-option">
          <a href="/"><input type="hidden" onSubmit={(e) => this.logout(e)}/>Logout</a>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.getUserReducer.user
  }
}
export default connect(mapStateToProps)(DropdownMenu)


export class Dropdown extends React.Component {
  constructor (){
    super();

    this.state = {
      toggled: false,
      selected: "Default"
    };
  }

  toggleDropdown () {
    this.setState({toggled: !this.state.toggled});
  }

  handleClick(value) {
    this.setState({selected: value});

    this.closeDropdown();
  }

  render () {
    var className="dropdown-container";

    if (this.props.className) {
      className += " " + this.props.className;
    }

    var dropdown = React.Children.map(
      this.props.children, (child, i) => {

      var clonedProps = {};
      clonedProps.click = this.handleClick.bind(this, i);

      return React.cloneElement(child, clonedProps);
    });

    return (
      <div className={className}
        onClick={this.toggleDropdown.bind(this)}>
        <div className="dropdown-label">
          {!this.state.toggled ? <span><img src={require("../burger.png")} alt="Hamburger Dropdown Icon" className="burger" /></span> : <span>Close <strong>[X]</strong></span>}
          <hr className = "navHr"/>
        </div>
        <div className="dropdown-active">
          {this.props.children[this.state.selected]}
        </div>
        <DropdownMenu toggled={this.state.toggled}>
          {dropdown}
        </DropdownMenu>
      </div>
    );
  }
}
