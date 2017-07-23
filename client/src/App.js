import React, { Component } from 'react';
import {fetchLocalBrewery} from './actions';
import { connect } from 'react-redux';
import LocalBreweries from './components/LocalBreweries'
import './App.css';

export class App extends Component {
  submitLocation(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(fetchLocalBrewery(value));
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <form onSubmit={e => this.submitLocation(e)}>
                <input type="text" name="userLocation" id="locationInput"
                    className="text" maxLength="35" autoComplete="off"
                    placeholder="Where are you........?" required
                    ref={input => this.input = input} />
              <label id="breweryLabel">Enter location then click here ->
                <input type="submit" id="localBreweryButton" className="localBrewButton flash-button" name="submit" value="Top Local Breweries" />
              </label>
            </form>
          <img src={require("./beer.png")} className="Beer-img App-logo" alt="Beer"/>

        </div>
          <img src={require("./bossdude.png")} className="Boss-logo" alt="Boss-logo"/>
          <footer className="Landing-footer">
            <p className="Subtitle">The beer boss tells you what beers and breweries to try!</p>
          </footer>
        <div>
          <LocalBreweries className="breweryResults"/>
        </div>
      </div>
    );
  }
}

export default connect()(App);
