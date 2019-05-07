import React, { Component } from 'react';
import { fetchLocalBrewery, fetchSpecificBeer, getUser, logout, deleteUser } from '../../actions';
import { connect } from 'react-redux';
import LocalBreweries from './LocalBreweries';
import SpecificBeer from './SpecificBeer';
import BossList from './BossList';
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
  }
  deleteUser(event) {
    event.preventDefault();
    this.props.dispatch(deleteUser());
  }
  downInDemo(event) {
    alert('This functionality is only available in the non-demo world!')
  }
  componentDidMount() {
    this.props.dispatch(getUser())
  }

  render() {
    return (
      <div className="dashboard-container" id="dashboard_section">
        <div>
          <form className="logout-form" onSubmit={(e) => this.logout(e)}>
            <button className="logout-button">Logout</button>
          </form>
          {this.props.username !== 'Boss' ? <form className="delete-user-form" onSubmit={(e) => this.deleteUser(e)}>
            <button className="delete-user-button">Delete Account</button>
          </form> :
          <form className="delete-user-form" onSubmit={(e) => this.downInDemo(e)}>
            <button className="delete-user-button">Delete Account</button>
          </form>}
          <header>
            <h1 className="welcome-header">Welcome, {this.props.username}! </h1>
              <p className="welcome-subtitle">Search for any beer below.  Add it to the Boss List if you wanna try it.<br/>  Move it to favorites if it was great OR remove it if it sucked!</p>
          </header>
        </div>
        <section>
          <BossList />
        </section>
          <form className="beer-form" onSubmit={e => this.submitBeer(e)}>
            <input type="text" name="userBeer" id="beer_input"
                className="text" maxLength="35" autoComplete="off"
                placeholder="Search beers?" required
                ref={input => this.input2 = input} />
            <label id="beer_label">Enter any beer, click button ->
              <input type="submit" id="beer_button" className="beers-button flash-button" name="submit" value="Search Beers" />
            </label>
          </form>
          <div className="beer-results-list" id="beer_results_list">
            <SpecificBeer className="beer-results-list"/>
          </div>
          <p className="brewery-form-description">You can also search below for the top breweries in your location!</p>
          <form className="brewery-form" id="brewery_list" onSubmit={e => this.submitLocation(e)}>
            <input type="text" name="userLocation" id="location_input"
                  className="text" maxLength="35" autoComplete="off"
                  placeholder="Where you at?" required
                ref={input => this.input = input}    />
            <label id="brewery_label">Enter location, click button ->
                <input type="submit" id="local_brewery_button" className="local-brew-button flash-button" name="submit" value="Top Local Breweries" />
            </label>
          </form>
          <div id="brewery_results_list" className="brewery-list">
            <LocalBreweries className="brewery-results-list" id="brewery_results_list"/>
          </div>
        </div>
      )
    }
  }
  const mapStateToProps = state => {

    return {username: state.getUserReducer.user.username}

  }

  export default connect(mapStateToProps)(Dashboard);
