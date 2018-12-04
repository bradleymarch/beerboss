import React, { Component } from 'react';
import {fetchLocalBrewery, fetchSpecificBeer} from './actions';
import { connect } from 'react-redux';
import Dashboard from './components/dashboard/Dashboard';
import LocalBreweries from './components/dashboard/LocalBreweries';
import SpecificBeer from './components/dashboard/SpecificBeer';
import Register from './components/Register';
import './App.css';
import '../public/assets/css/Animation.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <section className="logo-container">
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
        <div className="boss-header">Beer Boss</div>
        </div>
        <img src={require("./boss.png")} className="boss-logo" alt="Boss-logo"/>
        <footer className="landing-footer">
        <p className="subtitle">The beer boss tells you what beers and breweries to try!</p>
        </footer>
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
