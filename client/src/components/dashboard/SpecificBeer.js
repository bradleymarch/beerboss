import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {addSpecificBeer, addBeerToDb, clearBeerResults} from '../../actions';

class SpecificBeer extends React.Component {
	constructor() {
		super()

		this.addBeer = this.addBeer.bind(this)
		this.clearResults = this.clearResults.bind(this)
	}
	addBeer(beer) {
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
				<div className="beer-results-list" id="beer_results_list">
				{this.props.beers.length>0? <button className="clear-results-button" onClick={() => this.clearResults()}>Clear Results</button> : <div></div>}
					{this.props.beers.map((beer, index) => {
						return (
								<div className="each-beer-result" key={index}>
									<h2 className="beer-title">{beer.name}</h2>
									{beer.style.ibuMax ? <p>IBUs: {beer.style.ibuMax}</p> : <span></span>}
									{beer.abv ? <p>ABV: {beer.abv}</p> : <span></span>}
									{beer.style.category.name ? <p>Style: {beer.style.category.name}</p> : <span></span>}
									{beer.description ? <p>Description: {beer.description}</p> : <span></span>}
									<button className="add-beer-button" onClick={() => this.addBeer(beer)}>Add Beer</button>
								</div>
						)
					})}
					{this.props.beers.length>0? <div>
					<button className="clear-results-button" onClick={() => this.clearResults()}>Clear Results</button>
					<a href="#dashboard_section"><button className="top-of-results-button">Top</button></a>
					</div> : <div></div>}
				</div>
			)
	}
}

const mapStateToProps = state => {

		return {beers: state.specificBeerReducer.beers,
						beerlist: state.addSpecificBeerReducer.beerlist}
}
export default connect(mapStateToProps)(SpecificBeer);
