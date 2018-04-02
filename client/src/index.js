import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import  App from './App';
import Dashboard from './components/dashboard/Dashboard'
import BossList from './components/dashboard/BossList'
import Login from './components/Login'
import Register from './components/Register'
import DemoLogin from './components/DemoLogin'
import {Dropdown, DropdownMenu, DropdownItem} from './components/Dropdown'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import './index.css';

ReactDOM.render(

    <Provider store={store}>
    <Router>
        <div>
          <nav className="app-header">
            <a href="/">HOME</a>
            <a href="/login">LOGIN</a>
            <img src={require("./beer.png")} className="beer-img" alt="Beer"/>
            <a href="/register">REGISTER</a>
            <a href="/demo-login">DEMO</a>
          </nav>
          <div className="dropdown-div">
          <Dropdown label="Dropdown Label">
            <DropdownItem />
            <DropdownItem />
          </Dropdown>
          </div>
          <Route exact path="/" component={App}/>
            <Route path="/dashboard" component={Dashboard}/>
              <Route path="/dashboard/BossList" component={BossList}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/demo-login" component={DemoLogin}/>
        </div>
      </Router>
    </Provider>,
  document.getElementById('root')
);
