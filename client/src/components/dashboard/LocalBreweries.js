import React from 'react';
import { connect } from 'react-redux';
import { clearBreweryResults } from '../../actions'
import '../../App.css'

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
				<div className="breweryDiv">
				{this.props.breweries.data.length>0? <button className="clearResultsButton" onClick={() => this.clearResults()}>Clear Results</button> : <div></div>}
					<section className="eachBreweryResult">
						<p className="breweryTitle">1.) {this.props.breweries.data[0].name}</p>
								<p><a className="url" href={this.props.breweries.data[0].url}>Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[0].rating} stars</p>
								<p>Address: {this.props.breweries.data[0].location.address1}</p>
								<p>City: {this.props.breweries.data[0].location.city}</p>
					</section>
					<section className="eachBreweryResult">
						<p className="breweryTitle">2.) {this.props.breweries.data[1].name}</p>
								<p><a className="url" href={this.props.breweries.data[1].url}>Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[1].rating} stars</p>
								<p>Address: {this.props.breweries.data[1].location.address1}</p>
								<p>City: {this.props.breweries.data[1].location.city}</p>
					</section>
					<section className="eachBreweryResult">
						<p className="breweryTitle">3.) {this.props.breweries.data[2].name}</p>
								<p><a className="url" href={this.props.breweries.data[2].url}>Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[2].rating} stars</p>
								<p>Address: {this.props.breweries.data[2].location.address1}</p>
								<p>City: {this.props.breweries.data[2].location.city}</p>
					</section>
					<section className="eachBreweryResult">
						<p className="breweryTitle">4.) {this.props.breweries.data[3].name}</p>
								<p><a className="url" href={this.props.breweries.data[3].url}>Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[3].rating} stars</p>
								<p>Address: {this.props.breweries.data[3].location.address1}</p>
								<p>City: {this.props.breweries.data[3].location.city}</p>
					</section>
					<section className="eachBreweryResult">
						<p className="breweryTitle">5.) {this.props.breweries.data[4].name}</p>
								<p><a className="url" href={this.props.breweries.data[4].url}>Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[4].rating} stars</p>
								<p>Address: {this.props.breweries.data[4].location.address1}</p>
								<p>City: {this.props.breweries.data[4].location.city}</p>
					</section>
					<section className="eachBreweryResult">
						<p className="breweryTitle">6.) {this.props.breweries.data[5].name}</p>
								<p><a className="url" href={this.props.breweries.data[5].url}>Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[5].rating} stars</p>
								<p>Address: {this.props.breweries.data[5].location.address1}</p>
								<p>City: {this.props.breweries.data[5].location.city}</p>
					</section>
					<section className="eachBreweryResult">
						<p className="breweryTitle">7.) {this.props.breweries.data[6].name}</p>
								<p><a className="url" href={this.props.breweries.data[6].url}>Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[6].rating}</p>
								<p>Address: {this.props.breweries.data[6].location.address1}</p>
								<p>City: {this.props.breweries.data[6].location.city}</p>
					</section>
					<section className="eachBreweryResult">
						<p className="breweryTitle">8.) {this.props.breweries.data[7].name}</p>
								<p><a className="url" href={this.props.breweries.data[7].url}>Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[7].rating} stars</p>
								<p>Address: {this.props.breweries.data[7].location.address1}</p>
								<p>City: {this.props.breweries.data[7].location.city}</p>
					</section>
					<section className="eachBreweryResult">
						<p className="breweryTitle">9.) {this.props.breweries.data[8].name}</p>
								<p><a className="url" href={this.props.breweries.data[8].url}>Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[8].rating} stars</p>
								<p>Address: {this.props.breweries.data[8].location.address1}</p>
								<p>City: {this.props.breweries.data[8].location.city}</p>
						</section>
					<section className="eachBreweryResult">
						<p className="breweryTitle">10.) {this.props.breweries.data[9].name}</p>
								<p><a className="url" href={this.props.breweries.data[9].url}>Checkout Yelp Page</a></p>
								<p>Yelp Rating: {this.props.breweries.data[9].rating} stars</p>
								<p>Address: {this.props.breweries.data[9].location.address1}</p>
								<p>City: {this.props.breweries.data[9].location.city}</p>
								<a href="#dashboard_section"><button className="topOfResultsButton">To Top</button></a>
					</section>
					{this.props.breweries.data.length>0? <button className="clearResultsButton" onClick={() => this.clearResults()}>Clear Results</button> : <div></div>}
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
