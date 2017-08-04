import React, { Component } from 'react';
import { fetchLocalBrewery, fetchSpecificBeer, getUser, logout } from '../../actions';
import { connect } from 'react-redux';
import LocalBreweries from './LocalBreweries'
import SpecificBeer from './SpecificBeer'
import BossList from './BossList'
import '../../App.css';

class Dashboard extends Component {

submitLocation(event) {
      event.preventDefault();
      const value = this.input.value;
      this.props.dispatch(fetchLocalBrewery(value));
      event.target.userLocation.value = '';
      window.location = "#brewery_list";
  }
submitBeer(event) {
    event.preventDefault();
    const Value = this.input2.value;
    this.props.dispatch(fetchSpecificBeer(Value));
    event.target.userBeer.value = '';
    window.location = "#beer_results_list";
}
logout(event) {
  event.preventDefault();
  this.props.dispatch(logout());
  location.href = "/";
}

componentDidMount() {
  this.props.dispatch(getUser())
}

render() {
  return (
    <div className="dashboardContainer" id="dashboard_section">
      <div>
        <form className="logoutForm" onSubmit={(e) => this.logout(e)}>
          <button className="logoutButton">Logout</button>
        </form>
      <header>
        <h1 className="welcomeHeader">Welcome, {this.props.username} </h1>
          <p className="welcomeSubtitle">Search any beer to add to your BossList, then save it to your account!</p>
      </header>
      </div>
        <section>
          <BossList />
        </section>
        <form className="beerForm" onSubmit={e => this.submitBeer(e)}>
                <input type="text" name="userBeer" id="beerInput"
                    className="text" maxLength="35" autoComplete="off"
                    placeholder="Search beers..........?" required
                    ref={input => this.input2 = input} />
              <label id="beerLabel">Enter any beer then click here ->
                <input type="submit" id="beerButton" className="localBrewButton flash-button" name="submit" value="Search Beers" />
              </label>
            </form>
            <div className="beer-results-list" id="beer_results_list">
              <SpecificBeer className="beerResultsList"/>
            </div>
      <p className="breweryFormDescription">You can also search below for the top breweries in your location!</p>
      <form className="breweryForm" id="brewery_list" onSubmit={e => this.submitLocation(e)}>
              <input type="text" name="userLocation" id="locationInput"
                  className="text" maxLength="35" autoComplete="off"
                  placeholder="Where are you........?" required
                ref={input => this.input = input}    />
            <label id="breweryLabel">Enter location then click here ->
              <input type="submit" id="localBreweryButton" className="localBrewButton flash-button" name="submit" value="Top Local Breweries" />
            </label>
          </form>
          <div id="brewery_results_list" className="brewery-list">
            <LocalBreweries className="breweryResultsList" id="brewery_results_list"/>
          </div>
    </div>
    )
  }
}
const mapStateToProps = state => {
  
  return {username: state.getUserReducer.user.username}

}

export default connect(mapStateToProps)(Dashboard);
