import React, { Component } from 'react';
import {fetchLocalBrewery, fetchSpecificBeer} from './actions';
import { connect } from 'react-redux';
import Dashboard from './components/dashboard/Dashboard';
import LocalBreweries from './components/dashboard/LocalBreweries';
import SpecificBeer from './components/dashboard/SpecificBeer';
import Register from './components/Register';
import '../public/assets/css/app.css';
import '../public/assets/css/animation.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <section className="logo-container">
          <div id="container">
            <p id="top">
              <p className="beer-foam">
                <p className="foam-1"></p>
                <p className="foam-2"></p>
                <p className="foam-3"></p>
                <p className="foam-4"></p>
                <p className="foam-5"></p>
                <p className="foam-6"></p>
                <p className="foam-7"></p>
                <p className="foam-8"></p>
                <p className="foam-9"></p>
                <p className="foam-10"></p>
                <p className="foam-11"></p>
                <p className="foam-12"></p>
                <p className="foam-13"></p>
                <p className="foam-14"></p>
                <p className="foam-15"></p>
              </p>
              <p id="liquid">
                <p className="bubble bubble1"></p>
                <p className="bubble bubble2"></p>
                <p className="bubble bubble3"></p>
                <p className="bubble bubble4"></p>
                <p className="bubble bubble5"></p>
              </p>
            </p>
            <p className="boss-header">Beer Boss</p>
          </div>
          <img src={require("./boss.png")} className="boss-logo" alt="Boss-logo"/>
          <div className="landing-footer">
            <p className="subtitle">The beer boss tells you what beers and breweries to try!</p>
          </div>
        </section>
        <section id="about" className="about-container">
        <header>
        <div className="empty-about-space">
        </div>
        <h3 className="about-header">About</h3>
        </header>
        <div className="about-content">
        <h4 className="about-H4">Beer Boss, that is what!</h4>
        <p>The beer boss knows what's up.  This guy will tell you the best breweries wherever you are!  He'll also keep track of what beers you add to the Boss List, which you can edit at any time!</p>
        <div>
        <header>
        <h4 className="about-H4">Find the best breweries wherever you are!</h4>
        </header>
        <p></p>
        <p>Ever traveled to a new city and find yourself in need of a refreshing cold brew?  Look no further than Beer Boss.  With help from the Yelp API, Beer Boss tells you the top breweries, as ranked by customers, in your current location!</p>
        </div>
        <div>
        <header>
        <h4 className="about-H4">When you cannot recall those darn craft beer names, Beer Boss is here for you!</h4>
        </header>
        <p>With Beer Boss you can search for any beer you want and add it to your Boss List of beers to try.  Once you've tried it, you can add it as a favorite or can it if it's crap.  Register below to get Bossing today!</p>
        </div>
        </div>
        </section>
        <section id="register_landing">
        <Register />
        </section>
      </div>
    );
  }
}

export default connect()(App);
