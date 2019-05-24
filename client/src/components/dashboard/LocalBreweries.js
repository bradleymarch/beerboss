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
					<section className="each-brewery-result">
						<p className="brewery-title">1.) {this.props.breweries.data[0].name}</p>
								<p><a className="url" href={this.props.breweries.data[0].url} target="_blank">Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[0].rating} stars</p>
								<p>Address: {this.props.breweries.data[0].location.address1}</p>
								<p>City: {this.props.breweries.data[0].location.city}</p>
					</section>
					<section className="each-brewery-result">
						<p className="brewery-title">2.) {this.props.breweries.data[1].name}</p>
								<p><a className="url" href={this.props.breweries.data[1].url} target="_blank">Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[1].rating} stars</p>
								<p>Address: {this.props.breweries.data[1].location.address1}</p>
								<p>City: {this.props.breweries.data[1].location.city}</p>
					</section>
					<section className="each-brewery-result">
						<p className="brewery-title">3.) {this.props.breweries.data[2].name}</p>
								<p><a className="url" href={this.props.breweries.data[2].url} target="_blank">Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[2].rating} stars</p>
								<p>Address: {this.props.breweries.data[2].location.address1}</p>
								<p>City: {this.props.breweries.data[2].location.city}</p>
					</section>
					<section className="each-brewery-result">
						<p className="brewery-title">4.) {this.props.breweries.data[3].name}</p>
								<p><a className="url" href={this.props.breweries.data[3].url} target="_blank">Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[3].rating} stars</p>
								<p>Address: {this.props.breweries.data[3].location.address1}</p>
								<p>City: {this.props.breweries.data[3].location.city}</p>
					</section>
					<section className="each-brewery-result">
						<p className="brewery-title">5.) {this.props.breweries.data[4].name}</p>
								<p><a className="url" href={this.props.breweries.data[4].url} target="_blank">Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[4].rating} stars</p>
								<p>Address: {this.props.breweries.data[4].location.address1}</p>
								<p>City: {this.props.breweries.data[4].location.city}</p>
					</section>
					<section className="each-brewery-result">
						<p className="brewery-title">6.) {this.props.breweries.data[5].name}</p>
								<p><a className="url" href={this.props.breweries.data[5].url} target="_blank">Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[5].rating} stars</p>
								<p>Address: {this.props.breweries.data[5].location.address1}</p>
								<p>City: {this.props.breweries.data[5].location.city}</p>
					</section>
					<section className="each-brewery-result">
						<p className="brewery-title">7.) {this.props.breweries.data[6].name}</p>
								<p><a className="url" href={this.props.breweries.data[6].url} target="_blank">Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[6].rating}</p>
								<p>Address: {this.props.breweries.data[6].location.address1}</p>
								<p>City: {this.props.breweries.data[6].location.city}</p>
					</section>
					<section className="each-brewery-result">
						<p className="brewery-title">8.) {this.props.breweries.data[7].name}</p>
								<p><a className="url" href={this.props.breweries.data[7].url} target="_blank">Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[7].rating} stars</p>
								<p>Address: {this.props.breweries.data[7].location.address1}</p>
								<p>City: {this.props.breweries.data[7].location.city}</p>
					</section>
					<section className="each-brewery-result">
						<p className="brewery-title">9.) {this.props.breweries.data[8].name}</p>
								<p><a className="url" href={this.props.breweries.data[8].url} target="_blank">Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[8].rating} stars</p>
								<p>Address: {this.props.breweries.data[8].location.address1}</p>
								<p>City: {this.props.breweries.data[8].location.city}</p>
						</section>
					<section className="each-brewery-result">
						<p className="brewery-title">10.) {this.props.breweries.data[9].name}</p>
								<p><a className="url" href={this.props.breweries.data[9].url} target="_blank">Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[9].rating} stars</p>
								<p>Address: {this.props.breweries.data[9].location.address1}</p>
								<p>City: {this.props.breweries.data[9].location.city}</p>
								<a href="#dashboard_section"><button className="top-of-results-button">To Top</button></a>
					</section>
					{this.props.breweries.data.length>0? <button className="clear-results-button" onClick={() => this.clearResults()}>Clear Results</button> : <div></div>}
				</div>
			)
		}
	else {
		return <div></div>
	}

	}
}
const mapStateToProps = state => ({
		breweries: state.breweryReducer.breweries
})
export default connect(mapStateToProps)(LocalBreweries);
