import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import  App from './App';
import Dashboard from './components/dashboard/Dashboard'
import BossList from './components/dashboard/BossList'
import Root from './components/Root'
import Login from './components/Login'
import Register from './components/Register'
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

          <nav className="App-header">
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <img src={require("./beer.png")} className="Beer-img" alt="Beer"/>
            <a href="#register_landing">Register</a>
            <a href="/dashboard">Demo</a>
          </nav>
          <Route exact path="/" component={App}/>
            <Route path="/dashboard" component={Dashboard}/>
              <Route path="/dashboard/BossList" component={BossList}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </div>
      </Router>
    </Provider>,
  document.getElementById('root')
);
