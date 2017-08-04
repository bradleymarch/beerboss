import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {addSpecificBeer, addBeerToDb, clearBeerResults} from '../../actions'

class SpecificBeer extends React.Component {
	constructor() {
		super()

		this.addBeer = this.addBeer.bind(this)
		this.clearResults = this.clearResults.bind(this)
	}
	addBeer(beer) {
		console.log(beer)
				const value = beer.name;
				this.props.dispatch(addBeerToDb(value));
				this.props.dispatch(addSpecificBeer(value));
				window.scrollTo(0,0);

		}

 clearResults() {
	 	const results = this.props.beers;
	 	this.props.dispatch(clearBeerResults(results))
 }

	render() {
			return (
				<div className="beerResultsList" id="beer_results_list">
				{this.props.beers.length>0? <button className="clearResultsButton" onClick={() => this.clearResults()}>Clear Results</button> : <div></div>}
					{this.props.beers.map((beer, index) => {
						return (
								<div className="eachBeerResult" key={index}>
									<h2 className="beerTitle">{beer.name}</h2>
									<a href="#dashboard_section"><button className="topOfResultsButton">To Top</button></a>
									<p>ABV: {beer.abv}</p>
									<p>Description: {beer.description}</p>
									<button className="addBeerButton" onClick={() => this.addBeer(beer)}>Add Beer</button>
								</div>
						)
					})}
					{this.props.beers.length>0? <button className="clearResultsButton" onClick={() => this.clearResults()}>Clear Results</button> : <div></div>}
					</div>

			)
	}
}

const mapStateToProps = state => {
				
		return {beers: state.specificBeerReducer.beers,
						beerlist: state.addSpecificBeerReducer.beerlist}
}
export default connect(mapStateToProps)(SpecificBeer);
