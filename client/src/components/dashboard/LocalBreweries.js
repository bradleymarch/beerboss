import React from 'react';
import { connect } from 'react-redux';
import { clearBreweryResults } from '../../actions';

class LocalBreweries extends React.Component {
	constructor() {
		super()

		this.clearResults = this.clearResults.bind(this)
	}

 clearResults() {
	 	const results = this.props.breweries.data;
	 	this.props.dispatch(clearBreweryResults(results))
 }
	render() {
		if (this.props.breweries.data) {
			return (
				<div className="brewery-div">
				{this.props.breweries.data.length>0? <button className="clear-results-button" onClick={() => this.clearResults()}>Clear Results</button> : <div></div>}
				{this.props.breweries.data.slice(0, 10).map((brewery, index) => {
					return (
						<div key={index} className="each-brewery-result">
							<p className="brewery-title">{index + 1}. {brewery.name}</p>
							<p><a className="url" href={brewery.url} target="_blank">Checkout Yelp Page</a></p>
							<p>Yelp Rating: {brewery.rating} stars</p>
							<p>Address: {brewery.location.address1}</p>
							<p>City: {brewery.location.city}</p>
						</div>
					)
				})}
				{this.props.breweries.data.length>0? <div>
				<button className="clear-results-button" onClick={() => this.clearResults()}>Clear Results</button>
				<a href="#dashboard_section"><button className="top-of-results-button">Top</button></a>
				</div> : <div></div>}
			</div>
		 )
	  }
		else {
			return <span></span>
		}
	}
}
const mapStateToProps = state => ({
		breweries: state.breweryReducer.breweries
})
export default connect(mapStateToProps)(LocalBreweries);
