import React from 'react';
import { connect } from 'react-redux';

class LocalBreweries extends React.Component {
//33.23

	render() {
		if (this.props.breweries.data) {

			return (
				<div>
				<h2>Top Breweries< /h2>
					<p>1. {this.props.breweries.data[0].name}< /p>
					<p>2. {this.props.breweries.data[1].name}< /p>
					<p>3. {this.props.breweries.data[2].name}< /p>
					<p>4. {this.props.breweries.data[3].name}< /p>
					<p>5. {this.props.breweries.data[4].name}< /p>
					<p>6. {this.props.breweries.data[5].name}< /p>
					<p>7. {this.props.breweries.data[6].name}< /p>
					<p>8. {this.props.breweries.data[7].name}< /p>
					<p>9. {this.props.breweries.data[8].name}< /p>
					<p>10. {this.props.breweries.data[9].name}< /p>
				</div>
			)
		}
	else {
		return <div></div>
	}

	}
}
const mapStateToProps = state => ({
		breweries: state.breweries
})
export default connect(mapStateToProps)(LocalBreweries);
