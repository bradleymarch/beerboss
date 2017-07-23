import React from 'react';
import { connect } from 'react-redux';

export class LocalBreweries extends React.Component {
//33.23
	render() {
		console.log(this.props)
		const renderBreweries = this.props.breweries.map((brewery, index) => {
						return (
							<div key={index}>
								<p>
									{brewery.text}
								</p>
							</div>
						)
					})

		return (
			<div>
				{renderBreweries}
			</div>
		)
	}
}

const mapStateToProps = state => ({

		breweries: state.breweries

})



	export default connect(mapStateToProps)(LocalBreweries);
