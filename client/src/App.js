import React, { Component } from 'react';
import {fetchLocalBrewery, fetchSpecificBeer} from './actions';
import { connect } from 'react-redux';
import Dashboard from './components/dashboard/Dashboard'
import LocalBreweries from './components/dashboard/LocalBreweries'
import SpecificBeer from './components/dashboard/SpecificBeer'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <section className="Logo-container">
            <div id="container">
            <div id="top">
            <div className="beer-foam">
            <div className="foam-1"></div>
            <div className="foam-2"></div>
            <div className="foam-3"></div>
            <div className="foam-4"></div>
            <div className="foam-5"></div>
            <div className="foam-6"></div>
            <div className="foam-7"></div>
            <div className="foam-8"></div>
            <div className="foam-9"></div>
            <div className="foam-10"></div>
            <div className="foam-11"></div>
            <div className="foam-12"></div>
            <div className="foam-13"></div>
            <div className="foam-14"></div>
            <div className="foam-15"></div>
            </div>
            <div id="liquid">
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
            <div className="bubble bubble4"></div>
            <div className="bubble bubble5"></div>
            </div>
          </div>
          <div className="bossHeader">Beer Boss</div>
            </div>

            <img src={require("./boss.png")} className="Boss-logo" alt="Boss-logo"/>
          <footer className="Landing-footer">
            <p className="Subtitle">The beer boss tells you what beers and breweries to try!</p>
          </footer>
        </section>
        <section className="About-container">
          <header>
            <div className="emptyAboutSpace">
            </div>
                <h3 className="aboutHeader">About</h3>
          </header>
          <div className="aboutContent">
          <p>[<em>photo</em>]</p>
          <p>The beer boss knows what's up.  This guy will tell you the best breweries wherever you are!  He'll also keep track of what beers you add to the Boss List, which you can edit and rank later!</p>
        <div>
          <header>
              <h3>Find the best breweries wherever you are!</h3>
          </header>
          <p></p>
          <p>Ever traveled to a new city and find yourself in need of a refreshing cold brew?  Look no further than Beer Boss.  With help from the Yelp API, Beer Boss tells you the top breweries, as ranked by customers, in your current location!</p>
        </div>
        <div>
          <header>
              <h3>Create a dream-list of beers that you'll rank once you've tried them!</h3>
          </header>
          <p>[<em>photo</em>]</p>
          <p>Got some beers you love but can never remember them?  With the Boss List, and help from the BreweryDB API,
           you'll be able to add, update, and rank items on your list whenever!  You can add beers to try, rank beers, and even add some notes!</p>
        </div>
        </div>
      </section>
      <section id="register_landing">
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
        </section>
      </div>
    );
  }
}

export default connect()(App);
